---
title: Duration.ToRecord
---

# Duration.ToRecord


## Description

傳回一筆包含持續時間各部分的記錄。


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Details

傳回包含持續時間值 <code>duration</code> 各部分的記錄。  <ul>        <li><code>duration</code>: 要建立記錄的 <code>duration</code>。</li>      </ul>


## Examples

### Example #1 
將 &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; 轉換成其各部分的記錄，包括日、時、分和秒 (如果適用)。
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
