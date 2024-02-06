---
title: Number.From
---

# Number.From


根據指定的值建立數字。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

從指定的 <code>value</code> 傳回 <code>number</code> 值。也可能會提供選用的 <code>culture</code> (例如 "en-US")。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Number.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>number</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>number</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>number</code> 值。會處理通用文字格式 ("15", "3,423.10", "5.0E-10")。如需詳細資料，請參閱 <code>Number.FromText</code>。</li>        <li><code>logical</code>: <code>true</code> 為 1，<code>false</code> 為 0。</li>        <li><code>datetime</code>: 雙精確度浮點數，包含對等的 OLE Automation 日期。</li>        <li><code>datetimezone</code>: 雙精確度浮點數，包含等於 <code>value</code> 之本地日期與時間的 OLE Automation 日期。</li>        <li><code>date</code>: 雙精確度浮點數，包含對等的 OLE Automation 日期。</li>        <li><code>time</code>: 以分數天數表示。</li>        <li><code>duration</code>: 以整數與分數天數表示。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
取得 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
取得 &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; 的 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
取得 &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; 的&lt;code&gt;數值&lt;/code&gt; 。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
