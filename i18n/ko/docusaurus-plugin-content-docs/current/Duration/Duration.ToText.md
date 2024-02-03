---
title: Duration.ToText
---

# Duration.ToText


## Description

&#34;d.h:m:s&#34; 형식의 텍스트를 반환합니다.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

지정된 기간 값 <code>duration</code>을(를) "day.hour:mins:sec" 형태의 텍스트 표현으로 반환합니다. <ul>        <li><code>duration</code>: 텍스트 표현을 계산하는 <code>duration</code>입니다.</li>  <li><code>format</code>: <i>[선택 사항]</i> 더 이상 사용되지 않으며 Null이 아닌 경우 오류가 발생</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt;을 텍스트 값으로 변환합니다.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
