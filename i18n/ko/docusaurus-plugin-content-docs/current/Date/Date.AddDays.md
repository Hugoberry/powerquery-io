---
title: Date.AddDays
---

# Date.AddDays


## Description

날짜에 지정된 일 수를 더합니다.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

<code>datetime</code> 값 <code>dateTime</code>에 <code>numberOfDays</code>일을 더해 얻은 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 결과를 반환합니다.      <ul>      <li><code>dateTime</code>: 일 수를 더할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>numberOfDays</code>: 더할 일 수입니다.</li>      </ul>


## Examples

### Example #1 
날짜 2011년 5월 14일을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 5일을 더합니다.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
