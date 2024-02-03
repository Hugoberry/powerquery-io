---
title: DateTime.ToRecord
---

# DateTime.ToRecord


## Description

傳回一筆包含 datetime 值各部分的記錄。


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Details

傳回記錄，內含指定的 datetime 值 <code>dateTime</code> 各部分。 <ul>        <li><code>dateTime</code>: 要從中計算其各部分記錄的 <code>datetime</code> 值。</li>      </ul>


## Examples

### Example #1 
將 &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; 值轉換成包含日期和時間值的記錄。
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
