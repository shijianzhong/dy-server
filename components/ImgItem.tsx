/*
 * @Date: 2023-01-10 10:54:20
 * @LastEditors: shijianzhong shijianzhong@enn.cn
 * @LastEditTime: 2023-01-10 16:25:54
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
            <a href="#">Praesent eget lectus mauris</a>
          </h4>
        </div>
        <div class="post-hover text-center">
          <div class="inside">
            <i class="fa fa-plus"></i>
            <span class="date">20 Jan 2084</span>
            <h4>
              <a href="#">Praesent eget lectus mauris</a>
            </h4>
            <p>Morbi placerat pellentesque tortor, sed auctor dolor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
