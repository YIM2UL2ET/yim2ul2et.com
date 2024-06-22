import React from "react";
import HelloCompo from "../../component/Hello/HelloCompo";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import PCText from "../../component/Common/Boxs/PCText";
import Typewriter from 'typewriter-effect';

export default function Hello() {
    return (
        <ComponentBox>
            <HelloCompo />
            <PCText>
                <Typewriter
                    options={{
                        strings: ['제 이름은 임승호라고 합니다.'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 10000
                    }}
                />
            </PCText>
        </ComponentBox>
    );
}