import sleep from "@/app/lib/sleepUtil"

export default async function dijkstras(refEdges, disArray, vis, mnEdg) {

    function findMinimum() {
        let min = 10000
        let min_index = -1

        for (let i = 0; i< 9; i++) {
            if (disArray[i] < min && vis[i] == false) {
                min = disArray[i]
                min_index = i
            }
        }
        return min_index
    }
        
    for (let i=0; i< 9; i++) {

        let x = findMinimum()
        vis[x] = true

        const currentNode = document.getElementById(`node__${Number(x)+1}`)
        currentNode.style.backgroundColor = "red"
        await sleep(500)

        let prevEdge = mnEdg[Number(x)]
        
        if (prevEdge != false) {
            prevEdge = document.getElementById(prevEdge)
            prevEdge.style.backgroundColor = 'red'
        }

        const mat = refEdges[`${Number(x)+1}`]

        for (let key in mat) {

            const currentEdge = mat[key]

            const edg = document.getElementById(currentEdge[1])
            const preCol = edg.style.backgroundColor
            edg.style.backgroundColor = 'blue'
            await sleep(300)
            edg.style.backgroundColor = preCol

            if (vis[Number(key)-1] == false && disArray[x] + currentEdge[0] < disArray[Number(key)-1]) {
                disArray[Number(key)-1] = disArray[x] + currentEdge[0]
                let prevEdge = mnEdg[Number(key) - 1]
                if (prevEdge != false) {
                    prevEdge = document.getElementById(prevEdge)
                    prevEdge.style.backgroundColor = '#555'
                }
                mnEdg[Number(key) - 1] = currentEdge[1]
            }
        }
    }
}