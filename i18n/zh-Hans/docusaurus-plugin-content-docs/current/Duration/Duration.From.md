---
title: Duration.From
---

# Duration.From


从给定的值创建持续时间。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Remarks

从给定的 <code>value</code> 返回 <code>duration</code> 值。如果给定的 <code>value</code> 是 <code>null</code>，<code>Duration.From</code> 将返回 <code>null</code>。 如果给定的 <code>value</code> 是 <code>duration</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>duration</code> 值:      <ul>        <li><code>text</code>: 来自文本形式的占用时间格式(d.h:m:s)的 <code>duration</code> 值。有关详细信息，请参阅 <code>Duration.FromText</code>。</li>        <li><code>number</code>: 与由 <code>value</code> 表示的整数天数和不完整天数等效的 <code>duration</code>。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;2.525&lt;/code&gt; 转换为 &lt;code&gt;duration&lt;/code&gt; 值。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
