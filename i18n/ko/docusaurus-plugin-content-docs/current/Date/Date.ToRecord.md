---
title: Date.ToRecord
---

# Date.ToRecord


## Description

date 값의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Details

지정된 date 값 <code>date</code>의 일부를 포함하는 레코드를 반환합니다. <ul>        <li><code>date</code>: 일부분의 레코드를 계산할 <code>date</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; 값을 date 값의 일부를 포함하는 레코드로 변환합니다.
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
