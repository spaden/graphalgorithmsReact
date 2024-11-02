"use client"
import "./Matrix.scss"

export default function Matrix({size}) {

    const Cell = ({id}) => (<>
        <span className="matrix__cell" id={id}></span>
    </>)

    let ans = []

    function generateMatrix() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                ans.push(<Cell id={`matrix__cell__${i}__${j}`} key={`${i}__${j}`}/>)
            }
        }
        return ans
    }


    return (<>
            <div className={`matrix__size__${size}`}>
                {generateMatrix()}
            </div>
    </>);
}