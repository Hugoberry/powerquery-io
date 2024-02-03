---
title: Time.FromText
---

# Time.FromText


## Description

根据本地和通用以及自定义时间格式创建时间。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

根据文本表示形式 <code>text</code> 创建 <code>time</code> 值。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的<code>文本</code>值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致尽最大努力解析时间。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"tt"</code> 是 <code>"AM" 或 "PM"</code>，而在 <code>"ar-EG"</code> 中，<code>"tt"</code> 是 <code>"ص" 或 "م"</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 也可以是文本值。这与 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; 转换为时间值。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
将 &lt;code&gt;&#34;1012&#34;&lt;/code&gt; 转换为 Time 值。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
将 &lt;code&gt;&#34;10&#34;&lt;/code&gt; 转换为 Time 值。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
