---
title: Date.AddYears
---

# Date.AddYears


## Description

날짜에 지정된 연 수를 더합니다.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

<code>datetime</code> 값 <code>dateTime</code>에 <code>numberOfYears</code>년을 더해 얻은 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 결과를 반환합니다.      <ul>        <li><code>dateTime</code>: 연 수를 더할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>        <li><code>numberOfYears</code>: 더할 연 수입니다.</li>      </ul>


## Examples

### Example #1 
날짜 2011년 5월 14일을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 4년을 더합니다.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
2011년 5월 14일 오전 08:15:22의 날짜 및 시간을 나타내는 &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; 또는 &lt;code&gt;datetimezone&lt;/code&gt; 값에 10년을 더합니다.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
