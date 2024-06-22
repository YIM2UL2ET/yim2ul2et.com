import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import ContectCompo from "../../component/Contect/ContectCompo";
import PCText from "../../component/Common/Boxs/PCText";
import Typewriter from 'typewriter-effect';

export default function Contect() {
    return (
        <ComponentBox>
            <ContectCompo />
            <PCText>
                <Typewriter
                    options={{
                        strings: ['이곳에서 만나볼 수 있습니다.'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 10000
                    }}
                />
            </PCText>
        </ComponentBox>
    );
}