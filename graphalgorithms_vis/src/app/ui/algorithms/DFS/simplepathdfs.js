"use client"
import generateMemoryMatrix from "@/app/lib/Matrixarraygen"
import Matrix from "../../components/MatrixComp/Matrix"
import { useEffect, useRef, useState } from "react"



function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


export default function PathFindingDFS({size}) {

    let matrix = []
    let vis = []

    let matRef = useRef(null)
    let currentCell = useRef(null)

    let defaultColor = "#bbbb8a"
    let visColor = "green"

    const [abort, setAbort] = useState(false)
    let abortRef = useRef(abort)

    useEffect(() => {
        matrix = generateMemoryMatrix(size, 0)
        vis = generateMemoryMatrix(size, 0)
        vis[0][0] = 1
        matrix[size-1][size-2] = 1
        matRef.current = document.getElementsByClassName(`matrix__size__${size}`)[0]
        currentCell.current = matRef.current.querySelector("#matrix__cell__0__0")
        currentCell.current.style.backgroundColor = "green"
        dfsStart(0, 0)
    }, [])

    useEffect(() => {
        abortRef.current = abort
    }, [abort])


    const check = (i, j) => {
        if (i < 0 || i >= size || j < 0 || j >= size) return false
        return true
    }


    async function dfsStart(i, j) {
        if (abortRef.current) return 
        
        if (matrix[i][j] == 1) {
            currentCell.current = matRef.current.querySelector(`#matrix__cell__${i}__${j}`)
            currentCell.current.style.backgroundColor = "red"
            await sleep(600)
            // setCount(count => count + 1)
            return true
        }

        
        let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]

        for (let d = 0; d < 4; d++){
            let element = dir[d]
            let newRow = i + element[0]
            let newCol = j + element[1]

            if (check(newRow, newCol) && vis[newRow][newCol] != 1) {

                currentCell.current = matRef.current.querySelector(`#matrix__cell__${newRow}__${newCol}`)
                currentCell.current.style.backgroundColor = visColor
                vis[newRow][newCol] = 1

                await sleep(400)
                
                await dfsStart(newRow, newCol)

                if (abortRef.current) break

                vis[newRow][newCol] = 0
                
                currentCell.current = matRef.current.querySelector(`#matrix__cell__${newRow}__${newCol}`)
                currentCell.current.style.backgroundColor = defaultColor
                
                await sleep(200)
            }
        }

        return false
    }

    return (
        <>
            <Matrix size={size} />
            <br /> <br />

            <button onClick={() => setAbort(true)}>Abort</button>
        </>
    )

}