---
title: Date.From
---

# Date.From


## Description

根據指定的值建立日期。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

從指定的 <code>value</code> 傳回 <code>date</code> 值。也可能會提供選用的 <code>culture</code> (例如 "en-US")。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Date.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>date</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>date</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>date</code> 值。如需詳細資料，請參閱 <code>Date.FromText</code>。</li>        <li><code>datetime</code>: <code>value</code> 的日期元件。</li>        <li><code>datetimezone</code>: 等於 <code>value</code> 之本地日期時間的日期元件。</li>        <li><code>number</code>: <code>value</code> 所表示之 OLE Automation 日期對等日期時間的日期元件。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;43910&lt;/code&gt; 轉換成 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
將 &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; 轉換成 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
