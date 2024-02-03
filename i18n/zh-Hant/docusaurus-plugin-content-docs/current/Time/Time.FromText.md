---
title: Time.FromText
---

# Time.FromText


## Description

根據本機、國際和自訂時間格式建立時間。


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

以文字表示 (<code>text</code>) 建立 <code>time</code> 值。可能會提供選用的 <code>record</code> 參數 <code>options</code> 來指定其他屬性。<code>record</code> 可能包含下列欄位:<ul>   <li><code>Format</code>: <code>text</code> 值，表示要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 <code>null</code> 將導致盡量剖析時間。</li>   <li><code>Culture</code> 當 <code>Format</code> 不是 null 時，<code>Culture</code> 會控制一些格式規範。例如，在 <code>"en-US"</code> 中，<code>"tt"</code> 為 <code>"AM" 或 "PM"</code>，在 <code>"ar-EG"</code> 中，<code>"tt"</code> 為 <code>"ص" 或 "م"</code>。當 <code>Format</code> 是 <code>null</code> 時，<code>Culture</code> 會控制要使用的預設格式。當 <code>Culture</code> 是 <code>null</code> 或已省略時，會使用 <code>Culture.Current</code>。</li></ul>若要支援舊版工作流程，<code>options</code> 也可以是文字值。這與 <code>options</code><code> = Format = null, Culture = <code>options</code>]</code> 具有相同的行爲。


## Examples

### Example #1 
將 &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; 轉換成時間值。
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
將 &lt;code&gt;&#34;1012&#34;&lt;/code&gt; 轉換成 Time 值。
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
將 &lt;code&gt;&#34;10&#34;&lt;/code&gt; 轉換成 Time 值。
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
