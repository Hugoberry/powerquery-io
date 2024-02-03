---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

기간의 일부를 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

기간 값 <code>duration</code>의 일부를 포함하는 레코드를 반환합니다.   <ul>        <li><code>duration</code>: 레코드를 만드는 데 사용할 <code>duration</code>입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt;을 일, 시간, 분 및 초(해당되는 경우) 등의 일부를 포함하는 레코드로 변환합니다.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
