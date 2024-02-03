---
title: DateTime.FromText
---

# DateTime.FromText


## Description

从本地和通用日期时间格式创建 datetimezone。


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

根据文本表示形式 <code>text</code> 创建 <code>datetime</code> 值。可以提供可选的 <code>record</code> 参数 <code>options</code> 来指定其他属性。<code>record</code> 可以包含以下字段:<ul>   <li><code>Format</code>: 指示要使用的格式的<code>文本</code>值。要了解更多详细信息，请转到 https://go.microsoft.com/fwlink/?linkid=2180104 和 https://go.microsoft.com/fwlink/?linkid=2180105。省略此字段或提供 <code>null</code> 将导致尽最大努力解析日期。</li>   <li><code>Culture</code>: 如果 <code>Format</code> 不为 null，则 <code>Culture</code> 将控制某些格式说明符。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 是 <code>"Jan"、"Feb"、"Mar" 等</code>，而在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 是 <code>"янв"、"фев"、"мар" 等</code>。当 <code>Format</code> 为 <code>null</code> 时，<code>Culture</code> 控制要使用的默认格式。当 <code>Culture</code> 为 <code>null</code> 或省略时，将使用 <code>Culture.Current</code>。</li></ul>要支持旧版工作流，<code>options</code> 也可以是文本值。这与 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> 时的行为相同。


## Examples

### Example #1 
将 &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; 转换为 datetime 值。
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
将 &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; 转换为 datetime 值。
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
将 &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; 转换为 datetime 值。
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
将 &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; 转换为 datetime 值。
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
