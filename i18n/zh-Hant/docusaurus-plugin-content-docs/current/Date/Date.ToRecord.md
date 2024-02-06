---
title: Date.ToRecord
---

# Date.ToRecord


傳回一筆包含日期值各部分的記錄。


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

傳回記錄，內含指定的 date 值 <code>date</code> 各部分。 <ul>        <li><code>date</code>: 要將其各部分計算成記錄的 <code>date</code> 值。</li>      </ul>


## Examples

### Example #1 
將 &lt;code&gt;#date(2011, 12, 31)&lt;/code&gt; 值轉換成包含日期值各部分的記錄。
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
