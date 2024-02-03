---
title: Time.ToRecord
---

# Time.ToRecord


## Description

Time 값의 부분을 포함하는 레코드를 반환합니다.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

지정된 Time 값 <code>time</code>의 부분을 포함하는 레코드를 반환합니다. <ul>        <li><code>time</code>: 해당 부분의 레코드가 계산될 <code>time</code> 값입니다.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#time(11, 56, 2)&lt;/code&gt; 값을 Time 값을 포함하는 레코드로 변환합니다.
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
