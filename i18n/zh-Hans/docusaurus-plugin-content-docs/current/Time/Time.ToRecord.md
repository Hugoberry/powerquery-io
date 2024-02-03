---
title: Time.ToRecord
---

# Time.ToRecord


## Description

返回包含时间值的各个部分的记录。


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Details

返回包含给定时间值 <code>time</code> 的各个部分的记录。 <ul>        <li><code>time</code>: 要从中计算其各个部分的记录的 <code>time</code> 值。</li>      </ul>


## Examples

### Example #1 
将 &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; 值转换为包含时间值的记录。
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
