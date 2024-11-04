import { useEffect, useRef } from "react"
import "./GraphNodes.scss"
import dijkstras from "@/app/lib/dijkstras"

export default function GraphNodesComponent(size) {

    const canvasRef = useRef(null)

    const edgesRef = useRef({})

    let nodes = []
    let edges = []
    let disArray = []
    let vis = []

    let refEdges = []
    let mnEdg = []

    useEffect(() => {
        generateMatrixSize8()
    }, [])

    function generateMatrixSize8() {

        nodes = [
    
            { id: 1, x: 50, y: 150 },
            { id: 2, x: 150, y: 50 },
            { id: 3, x: 150, y: 250 },
            { id: 4, x: 280, y: 48 },
            { id: 5, x: 280, y: 250 },
            { id: 6, x: 280, y: 150 },
            { id: 7, x: 400, y: 48 },
            { id: 8, x: 400, y: 250 },
            { id: 9, x: 500, y: 150 }
        ]

        edges = [
            { from: 1, to: 2 },
            { from: 2, to: 3 },
            { from: 1, to: 3 },
            { from: 2, to: 4 },
            { from: 3, to: 5 },
            { from: 4, to: 6 },
            { from: 6, to: 5 },
            { from: 3, to: 6 },
            { from: 5, to: 8 },
            { from: 4, to: 7 },
            { from: 7, to: 9 },
            { from: 7, to: 8 },
            { from: 8, to: 9 },
            { from: 4, to: 8 }
        ]

        refEdges = {
            "1": {
                '2': [10, 'edge_1_2'],
                '3': [8, 'edge_1_3']
            },
            "2": {
                '3': [11, 'edge_2_3'],
                '4': [8, 'edge_2_4'],
                '1': [10, 'edge_1_2']
            },
            "3": {
                '5': [7, 'edge_3_5'],
                '6': [5, 'edge_3_6'],
                '2': [11, 'edge_2_3'],
                '1': [8, 'edge_1_3']
            },
            "4": {
                '2': [8, 'edge_2_4'],
                '6': [2, 'edge_4_6'],
                '7': [7, 'edge_4_7'],
                '8': [4, 'edge_4_8']
            },
            "5": {
                '3': [7, 'edge_3_5'],
                '6': [6, 'edge_6_5'],
                '8': [2, 'edge_5_8']
            },
            "6": {
                '4': [2, 'edge_4_6'],
                '3': [5, 'edge_3_6'],
                '5': [6, 'edge_6_5']
            },
            "7": {
                '9': [9, 'edge_7_9'],
                '4': [7, 'edge_4_7'],
                '8': [14, 'edge_7_8']
            },
            "8": {
                '4': [4, 'edge_4_8'],
                '7': [14, 'edge_7_8'],
                '9': [10, 'edge_8_9']
            }
        }

        const container = canvasRef.current;

        nodes.forEach(node => {
            const nodeElement = document.createElement('div')
            nodeElement.className = 'node'
            nodeElement.id = `node__${node.id}`
            nodeElement.innerText = node.id
            nodeElement.style.left = `${node.x}px`
            nodeElement.style.top = `${node.y}px`
            container.appendChild(nodeElement)
        })

        function drawEdge(x1, y1, x2, y2, id) {
            const edge = document.createElement('div')
            edge.className = 'edge'
            edge.id = `edge_${id}`
            
            const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
            const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI)
            
            edge.style.width = `${length}px`
            edge.style.left = `${x1}px`
            edge.style.top = `${y1}px`
            edge.style.transform = `rotate(${angle}deg)`
            
            container.appendChild(edge)
        }

        edges.forEach(edge => {
            const fromNode = nodes.find(node => node.id === edge.from)
            const toNode = nodes.find(node => node.id === edge.to)
            
            if (fromNode && toNode) {
                drawEdge(fromNode.x + 15, fromNode.y + 15, toNode.x + 15, toNode.y + 15, `${edge.from}_${edge.to}`)
            }
        })

        nodes.forEach(item => {
            disArray.push(10000)
            vis.push(false)
            mnEdg.push(false)
        })
        disArray[0] = 0

        dijkstras(refEdges, disArray, vis, mnEdg)
    }

    return (
        <>
            <div id="graph-container" ref={canvasRef}></div>
        </>
    )
 }