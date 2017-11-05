<?php

define('MAIL_INQUIRY', 'tmizumot04@tdesign-studio.com');
session_start();

if ($_SERVER['REQUEST_METHOD'] === "POST") {

    // CSRF対策
    if (!isset($_POST['token']) || $_POST['token'] !== getToken()) {
        exit('処理を正常に完了できませんでした');
    }

    // バリデーション
    $inquiry = $_POST['inquiry'];
    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $error   = array();

    if (empty($inquiry)) {
        $error['inquiry'] = '必ずご記入下さい';
    }

    if (empty($name)) {
        $error['name'] = '必ずご記入下さい';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // 注意: FILTER_VALIDATE_EMAIL は一部の有効なメールも弾きます。
        // 案件次第では正規表現の使用も必要です。
        $error['email'] = 'メールアドレスの形式が正しくありません';
    }

    // バリデーションエラーが無い場合お問い合わせを受付
    if (empty($error)) {

        $to      = MAIL_INQUIRY;
        $subject = "お問い合わせ: " . $name . '様より';
        $message = "email:\n" . $email . "\nお問い合せ本文:\n" . $inquiry;
        mb_language('Japanese');
        mb_internal_encoding('UTF-8');
        $flg = mb_send_mail($to, $subject, $message);

        if ($flg) {
            header('Location: thanks.html');
            exit;
        }
        exit('お問い合わせの受付に失敗しました');
    }
}

/**
 * HTMLの特殊文字をエスケープして返す
 */
function h($str)
{
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

/**
 * CSRF対策用 トークンを取得
 */
function getToken()
{
    return hash('sha256', session_id());
}

?>

<!DOCTYPE html>
<html lang="ja">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tatsuki's Portfolio Site | No ◇◇ No LIFE</title>
    <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/animate-nav.css">

    <meta property="og:site_name" content="No ◇◇ No LIFE">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Tatsuki's Portfolio Site | No ◇◇ No LIFE">
    <meta property="og:url" content="https://tatsumizu0430.github.io">
    <meta property="og:description" content="私個人に関して、これまで制作してきた作品をご紹介しています。">
    <meta property="og:image" content="https://tatsumizu0430.github.io/images/works/PortfolioSite.png">

    <meta property="fb:app_id" content="139232453278662">

    <meta property="twitter:site" content="@tatsumizu0430">
    <meta property="twitter:card" content="website">

    <meta name="description" content="私個人に関して、これまで制作してきた作品をご紹介しています。">
    <meta name="keywords" content="Portfolio, ポートフォリオ, UX/UI, インタラクティブ, Webサイト, WebDesign, 作品, 制作物, コンテンツ">


    <style>
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        border: 0;
    }
    </style>

</head>
<body>


    <div class="wrapper">
        <header class="header">
            <div id="myNav" class="overlay">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <div class="overlay-content">
                    <nav>
                        <ul class="full-nav">
                            <li><a href="#about">ABOUT ME</a></li>
                            <li><a href="#works">WORKS</a></li>
                            <li><a href="#skills">MY SKILLS</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- フルスクリーンナビゲーション -->

            <a class="menu-trigger" href="javascript:void(0)" onclick="openNav()">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <!-- ハンバーガーメニュー -->

            <div class="container-big">
                <nav>
                    <ul class="contents-bar" id="menu">
                        <li><a href="#about">ABOUT ME</a></li>
                        <li><a href="#works">WORKS</a></li>
                        <li><a href="#skills">MY SKILLS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <!-- ヘッダーナビゲーション -->
            <ul class="head-sns">
                <li><a class="twitter-color" href="https://twitter.com/tatsumizu0430" target="_blank"><i class="fa fa-twitter" title="Twitter"></i></a></li>
                <li><a class="facebook-color" href="http://www.facebook.com/tmizumot0430" target="_blank"><i class="fa fa-facebook" title="Facebook"></i></a></li>
                <li><a class="behance-color" href="https://www.behance.net/tmizumot0430" target="_blank"><i class="fa fa-behance action" title="Behance"></i></a></li>
            </ul>
            <!-- SNSアイコン -->
        </header>

        <div class="main">
            <div class="list list-mv07">
                <p class="site-title-sub">Products Design Portfolio</p>
                <h1 class="site-title">No ◇◇ No LIFE</h1>
                <p class="site-description">Check out my works</p>
                <a class="scroll"><span></span>Scroll</a>
            </div>
        </div>
        <!-- メインヴィジュアル -->

        <div class="about" id="about">
            <section class="list list-mv07">
                <h2 class="heading">ABOUT ME</h2>
                <div class="about-wrapper">
                    <img src="images/icon.png" width="170" height="170" alt="icon" class="pic-icon">
                    <p class="about-name">Designer<br>Tatsuki Mizumoto</p>
                </div>
                <div class="list list-mv07">
                    <h2>SCHOOL</h2>
                    <ul class="school-log">
                        <li>2000.04-2006.03　USHIKO elementary school</li>
                        <li>2006.04-2009.03　MINAMIFURUYA junior high school</li>
                        <li>2009.04-2012.03　KAWAGOE-NISHI high school</li>
                        <li>2012.04-2016.03　Tokyo International University the department of Information Business</li>
                        <li>2013.02-2013.12　Tokyo International University of America/Willamette University</li>
                        <li>2016.04-2017.03　Digital Hollywood Digital Design Interactive course UI/UX</li>
                    </ul>
                </div>

            </section>
        </div>
        <!-- About Me -->

        <section class="works" id="works">
            <h2 class="heading list list-mv07">WORKS</h2>
            <div class="container" id="loadarea">
                <div class="list list-item list-mv07">
                    <a href="http://www.tdesign-studio.com" target="_blank">
                        <div class="photo" style="background-image:url(images/works/tdesign-studio.png)">
                        </div>
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="https://www.behance.net/gallery/56588661/BusinessCard" target="_blank">
                        <div class="photo" style="background-image:url(images/works/tdesign-studio-card.png)">
                        </div>
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="#">
                        <div class="photo" style="background-image: url(images/works/PortfolioSite.png)">
                        </div>
                        <!-- <div class="text">
                            <h3>個人ポートフォリオサイト</h3>
                            <p>制作期間:1週間</p>
                            <p>使用ソフト:HTML5/CSS3/JavaScript/jQuery/Atom</p>
                            <p>「先を見据えて、未来へ進んでいく」をテーマに、個人用ポートフォリオサイトを制作しました。</p>
                        </div> -->
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="https://www.behance.net/gallery/50155767/_" target="_blank">
                        <div class="photo" style="background-image: url(images/works/utaehon.png)">
                        </div>
                        <!-- <div class="text">
                            <h3>親子でうたって、さわって、うたえほん！</h3>
                            <p>制作期間:3ヶ月</p>
                            <p>使用ソフト：Photoshop/Illustrator/AnimateCC/HTML5/CSS3/Atom</p>
                            <p>「まるで、ミュージカルの世界に入り込んだような・・・」アナログの絵本とデジタルのスマホの良い所を組み合わせた新感覚のスマホ絵本です。</p>
                        </div> -->
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="https://www.behance.net/gallery/49902079/TokyoBaysideHotelWebDesign" target="_blank">
                        <div class="photo" style="background-image: url(images/works/tokyobayside.png)">
                        </div>
                        <!-- <div class="text">
                            <h3>Tokyo Bayside Hotel Site</h3>
                            <p>制作期間：3週間</p>
                            <p>使用ソフト:Photoshop/Illustrator/HTML5/CSS3/Atom</p>
                            <p>架空の東京ベイサイドホテルのWebサイトのリニューアルを制作。「朝食デートをシーサイドで」というコンセプトの元、若いカップルをターゲットにデザイン及びコーディング。</p>
                        </div> -->
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="https://www.behance.net/gallery/49858533/4-App" target="_blank">
                        <div class="photo" style="background-image:url(images/works/4coma-manga.png)">
                        </div>
                    </a>
                </div>
                <div class="list list-item list-mv07">
                    <a href="https://www.behance.net/gallery/49855961/Planning-Concierge" target="_blank">
                        <div class="photo" style="background-image:url(images/works/planning.png)">
                        </div>
                    </a>
                </div>
            </div>
            <div class="list list-mv07">
                <a href="javascript:void(0);" id="loadmore">SHOW MORE</a>
            </div>
        </section>
        <!-- Works -->

        <section class="skills" id="skills">
            <h2 class="heading list list-mv07">MY SKILLS</h2>
            <div class="skills-wrapper">
                <div class="skill-box list list-mv07">
                    <i class="skill-icon fa fa-heart"></i>
                    <div class="skill-title">DESIGN</div>
                    <p class="skill-text">
                        ユーザーが使う場面を常にイメージしながら、<br>
                        どうすれば最適で使いやすいデザインに、<br>
                        使ってみたいと心を揺さぶるものになるのか、<br>
                        ユーザー目線で取り組む繊細なデザインを得意としています。
                    </p>
                </div>
                <div class="skill-box list list-mv07">
                    <i class="skill-icon fa fa-lightbulb-o"></i>
                    <div class="skill-title">IDEA</div>
                    <p class="skill-text">
                        企画から制作まで関わることが好きで、<br>
                        使いやすさや綺麗さのデザインだけではなく、<br>
                        ビジネス目線でコンテンツやサービスの<br>
                        先を意識しつつ、トータルにコンテンツを<br>
                        企画することもできます。
                    </p>
                </div>
                <div class="skill-box list list-mv07">
                    <i class="skill-icon fa fa-level-up"></i>
                    <div class="skill-title">SKILL UP</div>
                    <p class="skill-text">
                        見た目は「クール」に、中身は「ホット」。<br>
                        常に向上心を持ち、野望や夢は大きく。<br>
                        成長するためなら努力を惜しまない。<br>
                        チャレンジしていくバイタリティがあります。
                    </p>
                </div>
            </div>
        </section>
        <!-- My Skills -->

        <section class="contact" id="contact">
            <h2 class="heading">CONTACTS</h2>
            <form action="#" method="post" class="contact-form">
                <input type="hidden" name="token" value="<?php echo getToken(); ?>">
                <p>お名前 ※必須</p>
                <?php if (isset($error['name'])) echo h($error['name']); ?>
                <input type="text" name="name" required placeholder="お名前" >
                <p>お問い合わせ内容 ※必須</p>
                <?php if (isset($error['inquiry'])) echo h($error['inquiry']); ?>
                <textarea name="inquiry" required rows="10" cols="100" maxlength="1000" minlength="10" placeholder="できるだけ詳しく入力して下さい (10文字以上 1000文字以内)"></textarea>
                <p>ご連絡用Email ※必須</p>
                <?php if (isset($error['email'])) echo h($error['email']); ?>
                <input type="text" name="email" required placeholder="email@example.com" >
                <input type="submit" value="SEND">
            </form>
        </section>
        <!-- Contact -->

        <div class="footer">
            <nav class="foot-sns">
                <ul>
                    <li><a class="twitter-color" href="https://twitter.com/tatsumizu0430" target="_blank"><i class="fa fa-twitter" title="Twitter"></i></a></li>
                    <li><a class="facebook-color" href="http://www.facebook.com/tmizumot0430" target="_blank"><i class="fa fa-facebook" title="Facebook"></i></a></li>
                    <li><a class="behance-color" href="https://www.behance.net/tmizumot0430" target="_blank"><i class="fa fa-behance" title="Behance"></i></a></li>
                </ul>
            </nav>

            <p>Copyright(C) Tatsuki's Portfolio Site All rights reserved.</p>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="js/loadarea.js"></script>
    <script src="js/script.js"></script>
    <script src="js/jquery.backstretch.min.js"></script>
    <script>
    $.backstretch("images/bg.jpg");
    </script>
    <script src="js/scroll-header.js"></script>
    <script src="js/fullscreenNav.js"></script>
    <script src="js/jquery.inview.js"></script>



</body>
</html>