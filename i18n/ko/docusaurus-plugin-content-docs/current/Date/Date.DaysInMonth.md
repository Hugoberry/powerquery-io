---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

월간 일 수를 나타내는 28에서 31 사이의 숫자를 반환합니다.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

<code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값 <code>dateTime</code>의 월간 일 수를 반환합니다. <ul>        <li><code>dateTime</code>: 월간 일 수를 반환할 <code>date</code>, <code>datetime</code> 또는 <code>datetimezone</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;으로 표현된 12월의 일 수입니다.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
