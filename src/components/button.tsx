/**
 * @description 请添加Page组件的描述和注释!!!
 * @date 创建时间 2024-05-10 21:53
 */

import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Button: React.FC<Props> = props => {
    const { children } = props;

    return <button className="py-1 px-4 outline-none bg-blue-600 rounded">{children}</button>;
};

export default Button;
