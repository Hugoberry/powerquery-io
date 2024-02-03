---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

날짜에 지정된 주 수를 더합니다.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

<code>datetime</code> 값 <code>dateTime</code>에 <code>numberOfWeeks</code>주를 더해 얻은 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 결과를 반환합니다.      <ul>      <li><code>dateTime</code>: 주 수를 더할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>numberOfWeeks</code>: 더할 주 수입니다.</li>      </ul>


## Examples

### Example #1 
날짜 2011년 5월 14일을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 2주를 더합니다.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
