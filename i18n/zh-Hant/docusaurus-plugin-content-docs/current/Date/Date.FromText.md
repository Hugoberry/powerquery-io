---
title: Date.FromText
---

# Date.FromText


根據本地、國際和自訂日期格式建立日期。


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

以文字表示 (<code>text</code>) 建立 <code>date</code> 值。可能會提供選用的 <code>record</code> 參數 <code>options</code> 來指定其他屬性。<code>record</code> 可能包含下列欄位:<ul>   <li><code>Format</code>: <code>text</code> 值，表示要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 <code>null</code> 將導致盡量剖析日期。</li>   <li><code>Culture</code> 當 <code>Format</code> 不是 null 時，<code>Culture</code> 會控制一些格式規範。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 為 <code>"Jan", "Feb", "Mar", ...</code>，在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 為 <code>"янв", "фев", "мар", ...</code>。當 <code>Format</code> 是 <code>null</code> 時，<code>Culture</code> 會控制要使用的預設格式。當 <code>Culture</code> 是 <code>null</code> 或已省略時，會使用 <code>Culture.Current</code>。</li></ul>若要支援舊版工作流程，<code>options</code> 也可以是文字值。這與 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> 具有相同的行爲。


## Examples

### Example #1 
將 &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; 轉換成 &lt;code&gt;date&lt;/code&gt; 值。
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
使用自訂格式和德文文化特性進行轉換。
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
在西曆中尋找對應於回曆 1400 年初的日期。
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
