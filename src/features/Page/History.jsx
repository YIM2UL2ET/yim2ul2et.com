import React from "react";
import ComponentBox from "../../component/Common/Boxs/ComponentBox";
import HistoryCompo from "../../component/History/HistoryCompo";
import PCText from "../../component/Common/Boxs/PCText";
import Typewriter from 'typewriter-effect';

export default function History() {
    return (
        <ComponentBox>
            <HistoryCompo />
            <PCText>
                <Typewriter
                    options={{
                        strings: ['2년도 안된 자그마한 이력입니다.'],
                        autoStart: true,
                        loop: true,
                        pauseFor: 10000
                    }}
                />
            </PCText>
        </ComponentBox>
    );
}