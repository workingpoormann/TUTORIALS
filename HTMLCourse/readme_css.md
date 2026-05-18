# CSSとは？

CSS は「Cascading Style Sheets」の略で、HTML と並ぶ Web の重要技術です。

HTML → ページの内容（文章・画像など）を書く
CSS → その見た目やレイアウトを整える

つまり、 HTML が中身, CSS がデザイン という役割

## load css from HTML

```
<link rel="stylesheet" href="style.css">
```

## how to write to a way Inline CSS

1. Inline CSS

```
<h1 style="color: blue;">Hello</h1>
```

2. Internal CSS

```
<style>
  h1 {
    color: blue;
  }
</style>
```

3. External CSS

基本的にこれ っていうか全部これ
React等のフレームワークを利用するときはこの限りではない

```
h1 {
  color: blue;
}
```

## semantics

```
p {
  font-size: 22px;
  font-family: sans-serif;
  line-height: 1.5;
}
```

## セレクタリスト

```
h1,
h2,
h3,
h4,
p,
li {
  font-family: sans-serif;
}
```

## 子孫セレクタ

```
footer p {
  font-size: 16px;
}
```

## nested children selector

```
article header p {
  font-style: italic;
}
```

## class id

### id

id の制限
同じ id 名は1ページで1回しか使えない

```
<p id="author">

#author {
  font-style: italic;
}
```

### class

複数回使うならこれ
基本的にはid はほとんど利用しない
基本はClassを使う

```
<p class="related-author">

.related-author {
  font-size: 18px;
  font-weight: bold;
}
```

## CSS Color

- RGB notation

```
p {
  color: rgb(0, 255, 255)
  color: rgba(244, 179, 63, 0.3)
  color: #1098ad;
}

background-color: #f7f7f7;
border: 5px solid #1098ad;
```

## Pseudo-classes

### 普通のCSS

```html
<li class="first-li"></li>
```

```css
.first-li {
  font-weight: bold;
}
```

### 疑似クラス

- first-child: 最初の要素を選択する

```css
li:first-child {
  font-weight: bold;
}
```

- last-child: 最後の要素を選択する

```css
// selector:pseudo-class 
// li:first-child
li:last-child {
  font-style: italic;
}
```

- nth-child : n番目の要素を選択

```css
li:nth-child(2) {
  color: red;
}

li: nth-child(odd);
```

- odd, even

```css
li:nth-child(odd)
li:nth-child(even)
```

### 疑似クラスの注意点

```css
article p:first-child
```

```html
<article>
  <header>...</header>
  <p>...</p>
</article>
```

article の一番目の要素は<header> なので動かない

```html
<article>
  <p>...</p>
</article>
```

これなら動く

## CSS <a> link

aタグのクラスは基本的にこうやってほしい

```css
// こうじゃなくて
a {
  color: blue;
}

// これが良い
a: link {
  text-decoration: none;
}
```

```css
// こんな感じが基本
a:visited {
  color: gray;
}
```

- hover

```css
a:hover {
  color: orangered;
  font-weight: bold;
}
```

## 競合CSS Selector

最優先のCSS : conflicting selectors

```css
// あらゆる効果を押しのけて最優先にする
a !important {
}
```

## CSS Inheritance

```html
<p>Hello <strong>Laura Jones</strong></p>
```

```css
body {
  color: #444;
  font-family: sans-serif;
}
```

```css
body {
  color: red;
}

p {
  color: blue;
}
```

```css
body {
  color: red;
  font-family: "Monolice";
  line-height: 12px;
}
```

- Universal Selector

nav内のテキスト要素が全て18pxを継承する

```css
nav {
  font-size: 18px;
}
```

以下のnavを全て継承するので全部書かなくてよい

```css
nav a {
}
nav strong {
}
nav p {
}
```

全要素へ直接適用する

```css
* {
  border-top: 1px solid blue;
}
```

```css
* {
  color: blue;
}

p {
  color: red;
}
```
