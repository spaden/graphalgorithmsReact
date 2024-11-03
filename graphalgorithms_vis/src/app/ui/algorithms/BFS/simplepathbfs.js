"use client"
import generateMemoryMatrix from "@/app/lib/Matrixarraygen"
import Matrix from "../../components/MatrixComp/Matrix"
import { useEffect, useRef, useState } from "react"



function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


export default function PathFindingBFS({size}) {

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
        vis = generateMemoryMatrix(size, -1)
        vis[0][0] = 1
        matrix[size-1][size-2] = 1
        matRef.current = document.getElementsByClassName(`matrix__size__${size}`)[0]
        currentCell.current = matRef.current.querySelector("#matrix__cell__0__0")
        currentCell.current.style.backgroundColor = "green"
        bfsStart(0, 0)
    }, [])

    useEffect(() => {
        abortRef.current = abort
    }, [abort])


    const check = (i, j) => {
        if (i < 0 || i >= size || j < 0 || j >= size) return false
        return true
    }


    async function bfsStart(i, j) {

        let iteratePath = [[i, j]]

        let dir = [[0, 1], [1, 0], [-1, 0], [0, -1]]


        while (iteratePath) {

            if (abortRef.current) break
            
            let currentItem = iteratePath.shift()
            console.log(currentItem)

            if (!currentItem) break
            

            if (matrix[currentItem[0]][currentItem[1]] == 1) {
                currentCell.current = matRef.current.querySelector(`#matrix__cell__${currentItem[0]}__${currentItem[1]}`)
                currentCell.current.style.backgroundColor = "red"
                await sleep(600)
                break
            }



            for (let i = 0; i< 4; i++) {
                let element = dir[i]
                let newRow = currentItem[0] + element[0]
                let newCol = currentItem[1] + element[1]


                if (check(newRow, newCol) && vis[newRow][newCol] == -1) {
                    currentCell.current = matRef.current.querySelector(`#matrix__cell__${newRow}__${newCol}`)
                    currentCell.current.style.backgroundColor = visColor
                    vis[newRow][newCol] = 1
                    iteratePath.push([newRow, newCol])
                    await sleep(400)

                    if (abortRef.current) break

                }
            }

        }
    
    }

    return (
        <>
            <Matrix size={size} />
            <br /> <br />

            <button onClick={() => setAbort(true)}>Abort</button>
        </>
    )

}