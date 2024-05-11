/**
 * @description 请添加Layout组件的描述和注释!!!
 * @date 创建时间 2024-05-11 10:26
 */

import React, { type PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = props => {
    const { children } = props;

    return <main className="container">{children}</main>;
};

export default Layout;
