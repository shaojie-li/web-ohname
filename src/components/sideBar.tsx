/**
 * @description 请添加SideBar组件的描述和注释!!!
 * @date 创建时间 2024-05-12 00:15
 */

import React, { type ReactNode } from "react";

interface Props {
    header: ReactNode;
}

const SideBar: React.FC<Props> = props => {
    const { header } = props;

    return (
        <div className="flex flex-col w-[300px]">
            <div className="fixed left-0 top-[unset] flex flex-col w-[300px] h-full bg-[#141718]">
                <div>{header}</div>

                <nav className="flex-1 py-2 space-y-1">
                    <div className="py-2 px-3">Home</div>
                    <div className="py-2 px-3">About</div>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;
