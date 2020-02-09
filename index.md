<!doctype html>
<html>
    <head>
        <title>Bookers</title>
        <link rel="Stylesheet" href="C:\Users\bashm\Desktop\Projcet\Visual Code\Stylesheet.css">
    </head>
    
    <body>   
        <div id="header">
            <div class="container">
                <a id="heder-title" href="mainpage.html">صفحه اصلی</a>
                <ul id="header-nav">
                    <li><a href="about.html">درباره ما</a></li>
                    <li><a href="mailto:bash.mehdi@gmail.com">تماس با ما</a></li>
                </ul>
            </div>
        </div>
        <div id="content">
            <div class="container">
                <div class="post">
                    <div class="post-author">
                        <img src="C:\Users\bashm\Desktop\Projcet\Visual Code\Me.jpg">
                        <span>مهدی بشری</span><br>
                    </div>
                    <h4 class="post-date">ارسال شده در؛ امروز | در ساعت 18:39</h4>
                    <h3 class="post-title">مختصری در رابطه با تورم!</h3>
                    <div class="post-content">
                        <p>به زبان ساده تر موقعیتی که تو اون قیمت ها به صورت مداوم در حال افزایش هستن رو تورم میگن. باید دقت داشته باشین که هر افزایش قیمتی رو تورم نمیگن، این افزایش قیمت ها باید به صورت مداوم و مقاوم باشن. به طور مثال در صورت حذف یارانه یک کالا یا افزایش عوارض گمرکی یا افزایش مالیات در یک سال که نتیجه ش افزایش قیمت هستش رو تورم نمیگن چون این عوامل مدام قیمت رو افزایش نمیدن.</p>
                        <div id="likecounter">
                            <img id="heartIcon" src="C:\Users\bashm\Desktop\Projcet\Visual Code\Heart.png">
                        <p id="likes">0</p><p id="liketitle">نفر این مطلب را پسندیده اند.</p>
                        <button id="faved" onclick="like()"><span>پسندیدم</span></button>
                        </div>

                    </div>
                </div>
                </div>
                <textarea id="postText" placeholder="نظرتون رو درباره نوشته بنویسید ..."></textarea>
                <br>
                <button onclick="share()" class="sendcomment">ثبت نظر</button>
                <p id="posts"></p>

                <div id="content">
                    <div class="post-container">
                        <div class="post">
                            <div class="post-author">
                                <img src="C:\Users\bashm\Desktop\Projcet\Visual Code\Me.jpg">
                                <span>مهدی بشری</span><br>
                            </div>
                            <h4 class="post-date">ارسال شده در؛ امروز | در ساعت 18:39</h4>
                            <h3 class="post-title">سه سوالی که فیسبوک برای هدایت تیم توسعه محصول خود به کار می‌گیره!</h3>
                            <div class="post-content">
                                <p>عقل، در فقه و روایات از اهمیت ویژه‌ای برخوردار است. مرحوم کلینی در کتاب کافی، بخش جداگانه‌ای برای روایات عقل در نظر گرفته‌اند. سؤالات بسیاری راجع‌به عقل در مباحث دینی مطرح می‌شود؛ مانند:
                                    - آیا رفتار نیرنگ‌آمیز، نشانۀ عقل انسان است؟
                                    - آیا وسواس می‌تواند نمایان‌گر ویژگی عقل در انسان باشد؟</p>
                                <div id="likecounter">
                                    <img id="heartIcon" src="C:\Users\bashm\Desktop\Projcet\Visual Code\Heart.png">
                                <p id="likes">0</p><p id="liketitle">نفر این مطلب را پسندیده اند.</p>
                                <button id="faved" onclick="like()"><span>پسندیدم</span></button>
                                </div>
        
                            </div>
                        </div>
                        </div>
        <div id="footer">
            <div class="container">
                <div class="column1"><h4>شبکه های اجتماعی</h4>
                    <img id="twitterLogo" src="C:\Users\bashm\Desktop\Projcet\Visual Code\Twitter.png">
                <p><a href="https://twitter.com/bshmeh">توییتر</a>
                    <img id="instagramLogo" src="C:\Users\bashm\Desktop\Projcet\Visual Code\Instagram.png">
                   <a href="https://instagram.com/bshmeh">اینستاگرام</a>
                </p>
               </div>
                <div class="column2"><h4>درباره ما</h4>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                </div>
            </div>
        </div>
        <script src="script.js"></script>
    </body>


</html>
