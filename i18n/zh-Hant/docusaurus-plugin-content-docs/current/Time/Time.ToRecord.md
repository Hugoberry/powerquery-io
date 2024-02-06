---
title: Time.ToRecord
---

# Time.ToRecord


傳回一筆包含時間值各部分的記錄。


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

傳回記錄，內含指定的 time 值 <code>time</code> 各部分。 <ul>        <li><code>time</code>: 要將其各部分計算成記錄的 <code>time</code> 值。</li>      </ul>


## Examples

### Example #1 
將 &lt;code&gt;#time(11, 56, 2)&lt;/code&gt; 值轉換成包含時間值的記錄。
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
