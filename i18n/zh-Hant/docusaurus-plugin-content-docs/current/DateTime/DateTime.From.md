---
title: DateTime.From
---

# DateTime.From


## Description

根據指定的值建立 datetime。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

從指定的 <code>value</code> 傳回 <code>datetime</code> 值。也可能會提供選用的 <code>culture</code> (例如 "en-US")。若指定的 <code>value</code> 是 <code>null</code>，則 <code>DateTime.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>datetime</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>datetime</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>datetime</code> 值。如需詳細資料，請參閱 <code>DateTime.FromText</code>。</li>        <li><code>date</code>: <code>datetime</code> 以 <code>value</code> 為日期元件，並以 <code>12:00:00 AM</code> 為時間元件。</li>        <li><code>datetimezone</code>: 等於 <code>value</code> 的本地 <code>datetime</code>。</li>        <li><code>time</code>: <code>datetime</code> 以 <code>0</code> 的 OLE Automation 日期對等日期為日期元件，並以 <code>value</code> 為時間元件。</li>        <li><code>number</code>: <code>datetime</code> 包含 <code>value</code> 所表示的 OLE Automation 日期對等。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; 轉換成 &lt;code&gt;datetime&lt;/code&gt; 值。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
將 &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; 轉換成 &lt;code&gt;datetime&lt;/code&gt; 值。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
