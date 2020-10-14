import React from 'react';
import './Intern.css';
import ScrollAnimation from 'react-animate-on-scroll';

function Intern() {

    return (
        <div id="intern" className="intern-wrapper">
            <ScrollAnimation
                offset={300} 
                animateIn="fadeIn"
                animateOnce={true}>
                <div className="container">
                    <h2>Intern</h2>
                    <div className="intern">
                        <h3>TIS株式会社</h3>
                        <h4>2020年2月29日 ~ 3月1日</h4>
                        二日間のワークショップ的内容のインターン。使いづらいWebアプリを改善するという内容。
                        参加者が自分一人でプロのエンジニアの方々に囲まれていた。アプリの改善点を考えて洗い出す作業が楽しかった。
                        実際に改修する時は使っていたフレームワークに慣れていなくて、かなりエンジニアの方にサポートしていただいた。
                        言語はJavaでフレームワークはSpringを使用。
                    </div>
                    <div className="intern">
                        <h3>パーソルキャリア株式会社</h3>
                        <h4>2020年6月13日 ~ 6月21日</h4>
                        Design Sprint というサービス立案のフレームワークを体験する五日間のインターン。
                        五人チームに分かれて課題捻出からソリューションのアイデア出し、プロトタイプ作成、テストまでを行う。
                        チームでのコミュニケーションやサービス立案の考え方、課題の抽出の仕方などを学んだ。
                        またリーダーとしての役割も学んだ。Muralなどのツールを使用。
                    </div>
                    <div className="intern">
                        <h3>ラクス株式会社</h3>
                        <h4>2020年8月27日 ~ 9月17日</h4>
                        Node.js、socket.ioを用いたチャットアプリのチーム開発を体験するインターン。
                        4人チームに分かれて様々な機能を追加していった。
                        自分は複数のチャットルーム機能、メッセージの取り消し機能、UIの変更などを担当した。
                        Node.jsというより、socket.ioについて深く学ぶことができた。
                    </div>
                </div>
            </ScrollAnimation>
        </div>
    )
}

export default Intern;