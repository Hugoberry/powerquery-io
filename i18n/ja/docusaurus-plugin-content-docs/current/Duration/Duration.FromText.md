---
title: Duration.FromText
---

# Duration.FromText


テキスト表記の経過時間形式 (d.h:m:s) から期間値を返します。


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

指定されたテキスト <code>text</code> から duration 値を返します。この関数では、以下の形式を解析できます。 <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (範囲はどれも両端を含みます)<br />        ddd: 日数です。<br />        hh: 0 から 23 までの時間を表す数字です。<br />        mm: 0 から 59 までの分を表す数字です。<br />        ss: 0 から 59 までの秒を表す数字です。<br />        ff: 0 から 9999999 までの秒の少数部分を表す数字です。


## Examples

### Example #1 
&lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; を &lt;code&gt;duration&lt;/code&gt; 値に変換します。
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
