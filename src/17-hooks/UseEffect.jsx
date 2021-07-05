import React, { useState, useEffect } from "react";

const UseEffect = (props) => {
    const [data, setData] = useState({ count: 0 });

    // useEffect 只传一个参数，则组件每次数据更新，都会渲染 useEffect 里的函数
    // useEffect(() => {
    //     console.log("effect");
    // });

    // useEffect 传两个参数，可使 useEffect 里的函数只在挂载的时候渲染
    // 最后一个为空数组，表明不依赖任何值
    // 如果不为空数组，则依赖数组内的变量数据发生变化时，重新渲染 useEffect 里的函数
    useEffect(() => {
        console.log;
    }, []);

    function handleClick() {
        setData((data) => {
            return { count: data.count + 1 };
        });
    }

    return (
        <>
            <div> {data.count} </div>
            <button onClick={handleClick}>click</button>
        </>
    );
};

export default UseEffect;
