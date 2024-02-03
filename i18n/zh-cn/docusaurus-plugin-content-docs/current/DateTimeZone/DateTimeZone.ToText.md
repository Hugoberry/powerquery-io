---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

返回 datetimezone 值的文本表示形式。


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

返回 <code>dateTimeZone</code> 的文本表示形式。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>culture</code> 仅用于旧版工作流(见下文)。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的 <code>text</code> 值。请访问 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致使用 <code>Culture</code> 定义的默认值设置日期格式。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 是 <code>"Jan"、"Feb"、"Mar" 等</code>，而在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 是 <code>"янв"、"фев"、"мар" 等</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 和 <code>culture</code> 也可以是文本值。这与 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; 转换为 &lt;code&gt;text&lt;/code&gt; 值。&lt;i&gt;结果输出可能因当前区域性而异。&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
使用自定义格式和德语区域性进行转换。
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
使用 ISO 8601 模式进行转换。
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
