---
title: DateTime.From
---

# DateTime.From


从给定的值创建日期时间。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

从给定的 <code>value</code> 返回 <code>datetime</code> 值。还可提供可选的 <code>culture</code> (例如 "en-US")。如果给定的 <code>value</code> 是 <code>null</code>，<code>DateTime.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>datetime</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>datetime</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>datetime</code> 值。有关详细信息，请参阅 <code>DateTime.FromText</code>。</li>        <li><code>date</code>: 一个 <code>datetime</code>，它以 <code>value</code> 作为日期组件以及<code>午夜 12:00:00</code> 作为时间组件。</li>        <li><code>datetimezone</code>: 等效于 <code>value</code> 的本地 <code>datetime</code>。</li>        <li><code>time</code>: <code>datetime</code>，它具有作为日期组件的 <code>0</code> 的 OLE 自动化日期的等效日期以及作为时间组件的 <code>value</code>。</li>        <li><code>number</code>: 一个 <code>datetime</code>，它等效于由 <code>value</code> 表示的 OLE 自动化日期。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; 转换为 &lt;code&gt;datetime&lt;/code&gt; 值。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
将 &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; 转换为 &lt;code&gt;datetime&lt;/code&gt; 值。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
