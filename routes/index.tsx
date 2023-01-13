/*
 * @Date: 2023-01-10 09:49:39
 * @LastEditors: shijianzhong 994129509@qq.com
 * @LastEditTime: 2023-01-13 11:58:57
 * @FilePath: /dy-server/routes/index.tsx
 */
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Handlers } from "$fresh/server.ts";
import ImgsContainer from "../islands/ImgsContainer.tsx";
export const handler: Handlers= {
    async GET(_, ctx) {
      const { username } = ctx.params;
      const resp = await fetch(`https://api.github.com/users/${username}`);
      if (resp.status === 404) {
        return ctx.render(null);
      }
    //   const user: User = await resp.json();
      return ctx.render({});
    },
  };

export default function Home() {
  return (
    <>
      <Head>
        <title>beautiful photos</title>
        <meta charSet="utf-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="description" content=""></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/templatemo-style.css" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8317527679530231"
     crossOrigin="anonymous"></script>
      </Head>
        {/* <div id="loader-wrapper">
            <div id="loader"></div>
        </div> */}

        <div class="content-bg"></div>
        <div class="bg-overlay"></div>

        <div class="site-top">
            <div class="site-header clearfix">
                <div class="container">
                    <a href="#" class="site-brand pull-left"><strong>Beautiful</strong>Girls</a>
                    <div class="social-icons pull-right">
                        <ul>
                            <li><a href="#" class="fa fa-facebook"></a></li>
                            <li><a href="#" class="fa fa-twitter"></a></li>
                            <li><a href="#" class="fa fa-behance"></a></li>
                            <li><a href="#" class="fa fa-dribbble"></a></li>
                            <li><a href="#" class="fa fa-google-plus"></a></li>
                        </ul>
                    </div>
                </div>
            </div> 
            <div class="site-banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-2 col-md-8 text-center">
                            <h2>Photos of beautiful girls <span class="blue">like</span><span class="green">？</span></h2>
                            <p>If you like this website and wish for the website owner to continue updating, please give me a little encouragement, even if it's just sharing with your friends, so that I can also continue updating.</p>
                        </div>
                    </div>
                    <div class="row">
                        <form action="#" method="post" class="subscribe-form">
                            <fieldset class="col-md-offset-4 col-md-3 col-sm-8">
                                <input type="email" id="subscribe-email" placeholder="shijianzhong521@gmail.com" />
                            </fieldset>
                            <fieldset class="col-md-5 col-sm-4">
                                <input type="submit" id="subscribe-submit" class="button white" value="联系我!" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
        <div class="copyrights">Collect from <a href="https://www.webmoban.net"  title=""></a></div>
        <div class="main-posts">
            <ImgsContainer></ImgsContainer>
        </div>

        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="social-icons">
                            <ul>
                                <li><a href="#" class="fa fa-facebook"></a></li>
                                <li><a href="#" class="fa fa-twitter"></a></li>
                                <li><a href="#" class="fa fa-behance"></a></li>
                                <li><a href="#" class="fa fa-dribbble"></a></li>
                                <li><a href="#" class="fa fa-google-plus"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p class="copyright-text">Copyright &copy; 2084 B girls 
                    	| More Info <a href="halo-production-cd31.up.railway.app" target="_blank" title="博客">on my blog</a></p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
}
