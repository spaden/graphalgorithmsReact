export default function generateMemoryMatrix(size, val) {
    let itMat = []
    
    for (let i = 0; i< size; i++) {
        let row = []
        for (let j = 0; j< size; j++) {
            row.push(val)
        }
        itMat.push(row)
    }

    return itMat;
}