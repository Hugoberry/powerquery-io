---
title: Date.FromText
---

# Date.FromText


## Description

根据本地、通用和自定义日期格式创建日期。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

根据文本表示形式 <code>text</code> 创建 <code>date</code> 值。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的<code>文本</code>值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致尽最大努力解析日期。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 是 <code>"Jan"、"Feb"、"Mar" 等</code>，而在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 是 <code>"янв"、"фев"、"мар" 等</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 也可以是文本值。这与 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; 转换为 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
使用自定义格式和德语区域性进行转换。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
在公历中查找与回历中 1400 开头相对应的日期。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
