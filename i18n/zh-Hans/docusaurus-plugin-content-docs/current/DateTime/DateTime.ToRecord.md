---
title: DateTime.ToRecord
---

# DateTime.ToRecord


返回包含日期时间值的各个部分的记录。


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

返回包含给定日期时间值 <code>dateTime</code> 的各个部分的记录。 <ul>        <li><code>dateTime</code>: 要从中计算其各个部分的记录的 <code>datetime</code> 值。</li>      </ul>


## Examples

### Example #1 
将 &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; 值转换为包含日期和时间值的记录。
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
