"use client"
import generateMemoryMatrix from "@/app/lib/Matrixarraygen"
import Matrix from "../MatrixComp/Matrix"
import { useEffect } from "react"

export default function PathFindingDFS({size}) {

    let matrix = []

    useEffect(() => {
        matrix = generateMemoryMatrix(8)
        console.log(matrix)
        matrix[size-1][size-2] = 1 
    }, [])

    function dfs() {
        vis = set()

        
    }

    return (
        <Matrix size={size} />
    )

}