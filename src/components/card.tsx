/**
 * @description 请添加Card组件的描述和注释!!!
 * @date 创建时间 2024-05-10 22:15
 */

import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Card: React.FC<Props> = props => {
    const { children } = props;

    return (
        <div className="flex items-center justify-center p-[100px] m-2 shadow-md border border-[#ddd] border-solid">
            {children}
        </div>
    );
};

export default Card;
