import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import SkillsCompo from "../../component/Skills/SkillsCompo";
import PCText from "../../component/Common/Boxs/PCText";
import Typewriter from 'typewriter-effect';

export default function Skills() {
    return (
        <ComponentBox>
            <SkillsCompo />
            <PCText>
                <Typewriter
                    options={{
                        strings: ['그래도 이정도는 쓸 수 있습니다.'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 10000
                    }}
                />
            </PCText>
        </ComponentBox>
    );
}