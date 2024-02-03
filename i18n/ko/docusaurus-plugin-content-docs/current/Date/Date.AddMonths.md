---
title: Date.AddMonths
---

# Date.AddMonths


## Description

날짜에 지정된 개월 수를 더합니다.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

<code>datetime</code> 값 <code>dateTime</code>에 <code>numberOfMonths</code>개월을 더해 얻은 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 결과를 반환합니다.      <ul>        <li><code>dateTime</code>: 개월 수를 더할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>        <li><code>numberOfMonths</code>: 더할 개월 수입니다.</li>      </ul>


## Examples

### Example #1 
날짜 2011년 5월 14일을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 5개월을 더합니다.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
2011년 5월 14일 오전 08:15:22의 날짜 및 시간을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 18개월을 더합니다.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
