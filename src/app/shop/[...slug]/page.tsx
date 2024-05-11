/**
 * @description 请添加Page组件的描述和注释!!!
 * @date 创建时间 2024-05-10 10:41
 */

import React from "react";

interface Props {
    params: {
        slug: string[];
    };
}

const Page: React.FC<Props> = props => {
    const { params } = props;
    console.log("params.slug", params.slug);

    return (
        <div className="">
            全捕获段，没有参数的路由不会捕获，如 /shop 返回404
            {JSON.stringify(params.slug)}
        </div>
    );
};

export default Page;
