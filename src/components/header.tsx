/**
 * @description 请添加Header组件的描述和注释!!!
 * @date 创建时间 2024-05-10 22:24
 */

import React from "react";

const getMockStaticData = () => {
    return new Promise<{ name: string }>(resolve => {
        setTimeout(() => {
            resolve({ name: "SJ" });
        }, 1000);
    });
};

const Header: React.FC = async () => {
    const staticData = await getMockStaticData();

    return (
        <div className="w-full flex items-center bg-transparent px-3 py-3 space-x-3">
            <span>Header</span>
            <div>{staticData.name}</div>
        </div>
    );
};

export default Header;
