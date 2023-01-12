/*
 * @Date: 2023-01-10 10:54:20
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-01-12 14:30:20
 * @FilePath: /dy-server/components/ImgItem.tsx
 */

import { JSX } from "preact";

export function ImgItem(props: JSX.HTMLAttributes<HTMLElement>) {
  return (
    <div class="post-masonry col-md-4 col-sm-6">
      <div class="post-thumb">
        
        <img src={props.src} alt="" />
        <div class="title-over">
          <h4>
            {props}
            <a href="https://girls.deno.dev/">so beautiful</a>
          </h4>
        </div>
        <div class="post-hover text-center">
          <div class="inside">
            <i class="fa fa-plus"></i>
            <span class="date">12 Jan 2023</span>
            <h4>
              <a href="https://girls.deno.dev/">sponsor</a>
            </h4>
            <p>Your praise is my motivation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
