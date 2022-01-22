import { useState } from "react";
import styled from "styled-components";
import { CircleProps,ContainerProps,PlayerShape } from "./type";

const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border: 12px solid ${(props) => props.borderColor};
    border-radius: 100px;
    color: ${(props)=>props.theme.bgColor};
    box-sizing: border-box;
`;

const Circle = ({bgColor, borderColor, text ="default text"} : CircleProps) => {
    const [counter, setCounter] = useState<number>(0);
    const [value, setValue] = useState<number|string>("value");

    const sayHello = (playerObj:PlayerShape) => `hello ${playerObj.name} ${playerObj.age}`;
    const xxxHello = (xxx:string) => `xxx ${xxx}`;

    const handleCount = () => {
        setCounter(prev => prev + 1)
    }
    const handleValue = () => {
        setValue(544);
    }
    
    return(
            <>
                <button onClick={handleCount}>button</button>
                <button onClick={handleValue}>button</button>
                <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}> {/* ?? 초기값 */}
                    {sayHello({name:"Nico", age:12})}
                    {xxxHello("#3.3 부터~")}
                    {text}
                    {counter}
                    {value}
                </Container>
            </>
    );
}

export default Circle;