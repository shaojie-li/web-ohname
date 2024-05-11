/**
 * @description 请添加Layout组件的描述和注释!!!
 * @date 创建时间 2024-05-10 10:53
 */

import { Metadata } from "next";
import React, { PropsWithChildren } from "react";

export const metadata: Metadata = {
    title: "oh-settings",
    description: "settings 页",
};

interface Props extends PropsWithChildren {}

const Layout: React.FC<Props> = props => {
    const { children } = props;

    return <div className="h-screen bg-slate-500">{children}</div>;
};

export default Layout;
