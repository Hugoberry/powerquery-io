---
title: Date.ToText
---

# Date.ToText


返回日期值的文本表示形式。


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

返回 <code>date</code> 的文本表示形式。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>culture</code> 仅用于旧版工作流(见下文)。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的 <code>text</code> 值。请访问 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致使用 <code>Culture</code> 定义的默认值设置日期格式。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 是 <code>"Jan"、"Feb"、"Mar" 等</code>，而在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 是 <code>"янв"、"фев"、"мар" 等</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 和 <code>culture</code> 也可以是文本值。这与 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; 转换为&lt;code&gt;文本&lt;/code&gt;值。&lt;i&gt;结果输出可能因当前区域性而异。&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
使用自定义格式和德语区域性进行转换。
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
在回历中查找与公历中的 2000 年 1 月 1 日相对应的年份。
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
