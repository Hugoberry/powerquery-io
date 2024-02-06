---
title: Duration.From
---

# Duration.From


根據指定的值建立持續時間。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

從指定的 <code>value</code> 傳回 <code>duration</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Duration.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>duration</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>duration</code> 值:      <ul>        <li><code>text</code>: 來自文字之經過時間格式 (d.h:m:s) 的 <code>duration</code> 值。如需詳細資料，請參閱 <code>Duration.FromText</code>。</li>        <li><code>number</code>: 等於 <code>value</code> 所表示整數與分數天數的 <code>duration</code>。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;2.525&lt;/code&gt; 轉換成 &lt;code&gt;duration&lt;/code&gt; 值。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
