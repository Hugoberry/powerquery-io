---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

날짜에 지정된 분기 수를 더합니다.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

<code>datetime</code> 값 <code>dateTime</code>에 <code>numberOfQuarters</code>분기를 더해 얻은 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 결과를 반환합니다.      <ul>      <li><code>dateTime</code>: 분기 수를 더할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      <li><code>numberOfQuarters</code>: 더할 분기 수입니다.</li>      </ul>


## Examples

### Example #1 
날짜 2011년 5월 14일을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 1분기를 더합니다.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
