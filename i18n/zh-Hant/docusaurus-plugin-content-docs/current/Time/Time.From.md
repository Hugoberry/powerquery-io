---
title: Time.From
---

# Time.From


根據指定的值建立時間。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

從指定的 <code>value</code> 傳回 <code>time</code> 值。也可能會提供選用的 <code>culture</code> (例如 "en-US")。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Time.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>time</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>time</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>time</code> 值。如需詳細資料，請參閱 <code>Time.FromText</code>。</li>        <li><code>datetime</code>: <code>value</code> 的時間元件。</li>        <li><code>datetimezone</code>: 等於 <code>value</code> 之本地日期時間的時間元件。</li>        <li><code>number</code>: 等於 <code>value</code> 所表示分數天數的 <code>time</code>。若 <code>value</code> 是負值或者大於或等於 1，就會傳回錯誤。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;0.7575&lt;/code&gt; 轉換成 &lt;code&gt;time&lt;/code&gt; 值。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
將 &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; 轉換成 &lt;code&gt;time&lt;/code&gt; 值。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
