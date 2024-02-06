---
title: Date.From
---

# Date.From


从给定的值创建日期。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

从给定的 <code>value</code> 返回 <code>date</code> 值。还可提供可选的 <code>culture</code> (例如 “en-US”)。如果给定的 <code>value</code> 是 <code>null</code>，<code>Date.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>date</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>date</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>date</code> 值。有关详细信息，请参阅 <code>Date.FromText</code>。</li>        <li><code>datetime</code>: <code>value</code> 的日期组件。</li>        <li><code>datetimezone</code>: 本地日期时间中等效于 <code>value</code> 的日期组件。</li>        <li><code>number</code>: 等效于 <code>value</code> 表示的 OLE 自动化日期的日期时间的日期组件。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;43910&lt;/code&gt; 转换为 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
将 &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; 转换为 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
