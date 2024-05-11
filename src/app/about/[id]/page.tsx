"use client";

/**
 * @description 请添加[id]组件的描述和注释!!!
 * @date 创建时间 2024-05-10 10:03
 */

import React, { useEffect } from "react";

interface Props {
    params: {
        id: string;
    };
}

const Component: React.FC<Props> = props => {
    const { params } = props;

    useEffect(() => {
        console.log(1122);
    }, []);

    return <div className="">达大厦 {params.id}</div>;
};

export default Component;
