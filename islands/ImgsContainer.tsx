/*
 * @Date: 2023-01-10 13:34:01
 * @LastEditors: shijianzhong shijianzhong@enn.cn
 * @LastEditTime: 2023-01-12 10:07:05
 * @FilePath: /dy-server/islands/ImgsContainer.tsx
 */
import { Component } from "https://esm.sh/v102/preact@10.11.0/src/index";
import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { ImgItem } from "../components/ImgItem.tsx";
interface CounterProps {
  start: number;
}

export default function ImgsContainer() {
  //   const [count, setCount] = useState(props.start);
  let i = 2;
  const loadMore = () => {
    console.log(`i的值:${i}`);
    i++;
  };


  let dom;
  // let saveRef = (ref:any) =>{dom = ref};
  console.log(dom)
  // const img = document.getElementsByTagName('img')[0];
  // const imgWidth = img.width ;
  const waterFallHandler =()=>{
    // 获取图片的列数
    const column = window.innerWidth ;
  }
  const imgData ={
    "data":[
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0999.4jyjfey02160.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_1001.7lea4pdt1os0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_1003.24diwts4p0u8.webp"},
        // {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_1002.4d84d732v7a0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0998.1fquumvmsmv4.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0996.tpc2vzaxmeo.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0994.6xyxqmkqihw0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0997.1cd21vbuqb8g.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0995.5u06it9p4300.webp"},
        // {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0993.3yiky45pbgm0.webp"}
    ]
  };
  return (
    <div class="container">
      <div class="row">
        <div class="blog-masonry masonry-true" ref={dom}>
          
          {imgData.data.map((ele) => {
            return <ImgItem src={ele.src}></ImgItem>;
          })}
        </div>
      </div>
    </div>
  );
}
