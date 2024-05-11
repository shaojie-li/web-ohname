/**
 * @description 请添加Layout组件的描述和注释!!!
 * @date 创建时间 2024-05-10 10:17
 */

import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    // 下面三个属性都是从当前文件夹 @notification、@revenue、@users 来的插槽
    notification: React.ReactNode;
    revenue: React.ReactNode;
    users: React.ReactNode;
}

const Layout: React.FC<Props> = props => {
    const { children, users, notification, revenue } = props;

    return (
        <div>
            <div className="py-2 mx-2">{children}</div>

            <div>
                <Link href="/parallel/settings">Go Settings Page</Link>
            </div>

            <div className="flex">
                <div className="flex flex-col">
                    {users}
                    {revenue}
                </div>

                <div className="flex flex-1">{notification}</div>
            </div>
        </div>
    );
};

export default Layout;
