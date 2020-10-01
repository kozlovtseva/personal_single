import React, { useEffect } from "react";

import { styled, media } from "../../Theme";

import * as d3 from "d3";

import * as data from "../../assets/skills.json";

const BubbleSkills = () => {
    useEffect(() => {
        const width = 760;
        const height = 700;

        const color = d3
            .scaleOrdinal()
            .range([
                "#9be9e9",
                "#9be9da",
                "#c0bff3",
                "#9bc4e9",
                "#e8caf6",
                "#fafc88",
                "#88d2fc",
            ]);
        let groups = {};
        let childGroups = {};
        childGroups.children = [];
        data.nodes.forEach(function (item) {
            const list = groups[item.group];
            if (list) {
                list.push(item);
            } else {
                groups[item.group] = [item];
            }
        });
        for (const property in groups) {
            if (groups.hasOwnProperty(property)) {
                const children = {
                    children: groups[property],
                };
                childGroups.children.push(children);
            }
        }

        const pack = () =>
            d3.pack().size([width, height]).padding(1)(
                d3.hierarchy(childGroups).sum((d) => d.size)
            );
        let nodes = pack().leaves();

        const simulation = d3
            .forceSimulation(nodes)
            .force("x", d3.forceX(width / 2).strength(0.1))
            .force("y", d3.forceY(height / 2).strength(0.1))
            .force("cluster", forceCluster())
            .force("collide", forceCollide());

        let svg = d3
            .select(".bubbles")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 800 400");

        const node = svg
            .append("g")
            .selectAll(".node")
            .data(nodes)
            .join("g")
            .attr("class", "node")
            .call(drag(simulation));

        const circle = node
            .append("circle")
            .attr("r", (d) => d.r)
            .attr("fill", (d) => color(d.data.group))
            .style("pointer-events", "all")
            .call(drag(simulation));

        const text = node
            .append("text")
            .text((d) => d.data.text)
            .attr("font-family", "Roboto")
            .attr("font-size", "12px")
            .attr("fill", "#777")
            .style("text-anchor", "middle");

        simulation.on("tick", () => {
            text.attr("x", (d) => d.x).attr("y", (d) => d.y);

            circle.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
        });
        function drag(simulation) {
            function dragstarted(event, d) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }

            function dragged(event, d) {
                d.fx = event.x;
                d.fy = event.y;
            }

            function dragended(event, d) {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }

            return d3
                .drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }
        function forceCluster() {
            const strength = 0.2;
            let nodes;

            function force(alpha) {
                const centroids = d3.rollup(
                    nodes,
                    centroid,
                    (d) => d.data.group
                );
                const l = alpha * strength;
                for (const d of nodes) {
                    const { x: cx, y: cy } = centroids.get(d.data.group);
                    d.vx -= (d.x - cx) * l;
                    d.vy -= (d.y - cy) * l;
                }
            }

            force.initialize = (_) => (nodes = _);

            return force;
        }
        function forceCollide() {
            const alpha = 0.4; // fixed for greater rigidity!
            const padding1 = 2; // separation between same-color nodes
            const padding2 = 6; // separation between different-color nodes
            let nodes;
            let maxRadius;

            function force() {
                const quadtree = d3.quadtree(
                    nodes,
                    (d) => d.x,
                    (d) => d.y
                );
                for (const d of nodes) {
                    const r = d.r + maxRadius;
                    const nx1 = d.x - r,
                        ny1 = d.y - r;
                    const nx2 = d.x + r,
                        ny2 = d.y + r;
                    quadtree.visit((q, x1, y1, x2, y2) => {
                        if (!q.length)
                            do {
                                if (q.data !== d) {
                                    const r =
                                        d.r +
                                        q.data.r +
                                        (d.data.group === q.data.data.group
                                            ? padding1
                                            : padding2);
                                    let x = d.x - q.data.x,
                                        y = d.y - q.data.y,
                                        l = Math.hypot(x, y);
                                    if (l < r) {
                                        l = ((l - r) / l) * alpha;
                                        d.x -= x *= l;
                                        d.y -= y *= l;
                                        q.data.x += x;
                                        q.data.y += y;
                                    }
                                }
                            } while ((q = q.next));
                        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                    });
                }
            }

            force.initialize = (_) =>
                (maxRadius =
                    d3.max((nodes = _), (d) => d.r) +
                    Math.max(padding1, padding2));

            return force;
        }
        function centroid(nodes) {
            let x = 0;
            let y = 0;
            let z = 0;
            for (const d of nodes) {
                let k = d.r ** 2;
                x += d.x * k;
                y += d.y * k;
                z += k;
            }
            return { x: x / z, y: y / z };
        }
    }, []);
    return <Bubbles className="bubbles" />;
};

const Bubbles = styled.div`
    & svg {
        ${media.md} {
            width: 550px;
        }
        ${media.sm} {
            width: 400px;
        }
        ${media.xs} {
            width: 300px;
        }
    }
    height: 600px;
    margin: 0 auto;
    width: fit-content;
    & .node {
        cursor: pointer;
    }
    ${media.md} {
        height: 450px;
        width: 550px;
    }
    ${media.sm} {
        height: 350px;
        width: 400px;
    }
    ${media.xs} {
        height: 250px;
        width: 300px;
    }
`;
export default BubbleSkills;
