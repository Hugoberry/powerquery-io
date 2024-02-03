---
title: Number.From
---

# Number.From


## Description

从给定的值创建一个数。


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

从给定的 <code>value</code> 返回 <code>number</code> 值。还可提供可选的 <code>culture</code> (例如 "en-US")。如果给定的 <code>value</code> 是 <code>null</code>，<code>Number.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>number</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>number</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>number</code> 值。处理通用文本格式("15", "3,423.10", "5.0E-10")。有关详细信息，请参阅 <code>Number.FromText</code>。</li>        <li><code>logical</code>: 1 表示 <code>true</code>，0 表示 <code>false</code>。</li>        <li><code>datetime</code>: 一个包含等效的 OLE 自动化日期的双精度浮点数。</li>        <li><code>datetimezone</code>: 一个包含与 <code>value</code> 的当地日期和时间等效的 OLE 自动化日期的双精度浮点数。</li>        <li><code>date</code>: 一个包含等效的 OLE 自动化日期的双精度浮点数。</li>        <li><code>time</code>: 用天的小数形式表示。</li>        <li><code>duration</code>: 用整数天和天的小数形式表示。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;4&#34;&lt;/code&gt; 的 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
获取 &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; 的 &lt;code&gt;number&lt;/code&gt; 值。
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
获取 &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; 的&lt;code&gt;数&lt;/code&gt;值。
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
