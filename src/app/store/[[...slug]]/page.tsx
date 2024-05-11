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
    console.log("params.slug", params);

    return (
        <div className="">
            可选的全捕获段，没有参数的路由也会捕获，如 /store
            {JSON.stringify(params.slug)}
        </div>
    );
};

export default Page;
