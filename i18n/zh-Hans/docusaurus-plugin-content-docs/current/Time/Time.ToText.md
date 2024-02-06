---
title: Time.ToText
---

# Time.ToText


返回时间值的文本表示形式。


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

返回 <code>time</code> 的文本表示形式。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>culture</code> 仅用于旧版工作流(见下文)。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的 <code>text</code> 值。要了解更多详细信息，请访问 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致使用 <code>Culture</code> 定义的默认值设置日期格式。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"tt"</code> 是 <code>"AM" 或 "PM"</code>，而在 <code>"ar-EG"</code> 中，<code>"tt"</code> 是 <code>"ص" 或 "م"</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 和 <code>culture</code> 也可以是文本值。这与 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; 转换为&lt;code&gt;文本&lt;/code&gt;值。&lt;i&gt;结果输出可能因当前区域性而异。&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
使用自定义格式和德语区域性进行转换。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
使用标准时间格式进行转换。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
