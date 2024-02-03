---
title: Duration.FromText
---

# Duration.FromText


## Description

텍스트 경과 시간 형식(d.h:m:s)에서 기간 값을 반환합니다.


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

지정된 텍스트 <code>text</code>에서 기간 값을 반환합니다. 이 함수는 다음 형식을 구문 분석할 수 있습니다. <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (모든 범위가 포함됨)<br />        ddd: 날짜 값입니다.<br />        hh: 0~23의 시간 값입니다.<br />        mm: 0~59의 분 값입니다.<br />        ss: 0~59의 초 값입니다.<br />        ff: 0~9999999의 초 분할 값입니다.


## Examples

### Example #1 
&lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt;을 &lt;code&gt;duration&lt;/code&gt; 값으로 변환합니다.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
