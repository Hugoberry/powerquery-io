---
title: Time.From
---

# Time.From


从给定的值创建时间。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

从给定的 <code>value</code> 返回 <code>time</code> 值。还可提供可选的 <code>culture</code> (例如 “en-US”)。如果给定的 <code>value</code> 是 <code>null</code>，则 <code>Time.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>time</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>time</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>time</code> 值。有关详细信息，请参阅 <code>Time.FromText</code>。</li>        <li><code>datetime</code>: <code>value</code> 的时间组件。</li>        <li><code>datetimezone</code>: 本地日期时间中等效于 <code>value</code> 的时间组件。</li>        <li><code>number</code>: 与由 <code>value</code> 表示的不完整天数等效的 <code>time</code>。如果 <code>value</code> 是负数或大于等于 1，则返回错误。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;0.7575&lt;/code&gt; 转换为 &lt;code&gt;time&lt;/code&gt; 值。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
将 &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; 转换为 &lt;code&gt;time&lt;/code&gt; 值。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
