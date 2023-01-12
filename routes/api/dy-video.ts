/*
 * @Date: 2023-01-09 14:22:42
 * @LastEditors: 史建忠 shijianzhongg@icloud.com
 * @LastEditTime: 2023-01-09 16:21:39
 * @FilePath: /dy-server/routes/api/dy-video.ts
 */
import { Handlers } from "$fresh/server.ts";
import { urlParse } from "https://deno.land/x/url_parse@1.1.0/mod.ts";
export const handler: Handlers = {
  async GET(_req) {
    const uuid = crypto.randomUUID();
    const resp = await fetch(`https://v.douyin.com/kSKVcaj/`);
    console.log(resp);
    const url = urlParse(resp.url); // Returns an URL object

    console.log("77888888______________");
    


    //获取ID
    let id = url.pathname.replace("/share/video/", "");
    id = id.replace("/", "");

    const _url =
      `https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=${id}`;
       
    console.log(_url);
    const resp1 = await fetch("https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=7186472248356736314");
    console.log("77888888______________))))))))))");
    console.log(resp1);
    console.log(resp1.url);

    const resp2 = await fetch(resp1.url);
    console.log(resp2)
    return new Response(JSON.stringify(_url), {
      headers: { "Content-Type": "application/json" }
    });
  },
};
