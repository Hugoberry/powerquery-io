---
title: Date.ToRecord
---

# Date.ToRecord


返回包含日期值的各个部分的记录。


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

返回包含给定日期值 <code>date</code> 的各个部分的记录。 <ul>        <li><code>date</code>: 要从中计算其各个部分的记录的 <code>date</code> 值。</li>      </ul>


## Examples

### Example #1 
将 &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; 值转换为包含日期值的各个部分的记录。
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
