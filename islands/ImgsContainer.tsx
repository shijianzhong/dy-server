/*
 * @Date: 2023-01-10 13:34:01
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-01-13 11:57:35
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
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0998.1fquumvmsmv4.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0996.tpc2vzaxmeo.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0994.6xyxqmkqihw0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0997.1cd21vbuqb8g.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0995.5u06it9p4300.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0638.6whyosqqsfk0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0641.40rb3jhvpf4.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0640.7iwhcz9p9eg0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0639.3xnrge20bcu0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0642.3nbynhj2mgs0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0643.2k93x3oawhq0.webp"},


        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0206.2wv107b4m860.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0207.21fh9k4r36yo.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0995.5u06it9p4300.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0208.49q6ou8w43q0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0206-2.1egrxglu1odc.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0238.51zt7gsu6jg0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0239.63yhp8j4dpw0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0240.5jgwbllz9jo0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0149.25yfr166r76o.webp"},

        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0148.6argxaqptvc0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0207.21fh9k4r36yo.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0153.1umaya1q1fc0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0151.355ghwe2gtk.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0155.2glk70ekbon4.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0152.6nxyur4cwe40.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0322.61zzoxxu3jw0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0320.48ascrcoi9e0.webp"},
        {"src":"https://cdn.staticaly.com/gh/shijianzhong/pics@master/girls/IMG_0323.2w5fdrsqm3k0.webp"},

    ]
  };
  return (
    <div class="container">
      <div class="row">
        <div class="blog-masonry masonry-true" ref={dom} style="display:flex;flex-wrap:wrap">
          
          {imgData.data.map((ele) => {
            return <ImgItem src={ele.src}></ImgItem>;
          })}
        </div>
      </div>
    </div>
  );
}
