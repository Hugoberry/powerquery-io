---
title: Date.Day
---

# Date.Day


## Description

일 구성 요소를 반환합니다.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

<code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값의 일 구성 요소를 반환합니다.      <ul>        <li><code>dateTime</code>: 일 구성 요소를 추출할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
2011년 5월 14일 오후 05:00:00의 날짜 및 시간을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값의 일 구성 요소를 가져옵니다.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
