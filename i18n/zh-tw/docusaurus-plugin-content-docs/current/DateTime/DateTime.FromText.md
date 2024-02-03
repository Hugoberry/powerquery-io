---
title: DateTime.FromText
---

# DateTime.FromText


## Description

根據本地和國際日期時間格式建立 datetimezone。


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

以文字表示 (<code>text</code>) 建立 <code>datetime</code> 值。可能會提供選用的 <code>record</code> 參數 (<code>options</code>) 來指定其他屬性。<code>record</code> 可能包含下列欄位:<ul>   <li><code>Format</code>: <code>text</code> 值，表示要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 <code>null</code> 將導致盡量剖析日期。</li>   <li><code>Culture</code>: 當 <code>Format</code> 不是 null 時，<code>Culture</code> 會控制一些格式規範。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 為 <code>"Jan", "Feb", "Mar", ...</code>，在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 為 <code>"янв", "фев", "мар", ...</code>。當 <code>Format</code> 是 <code>null</code> 時，<code>Culture</code> 會控制要使用的預設格式。當 <code>Culture</code> 是 <code>null</code> 或已省略時，會使用 <code>Culture.Current</code>。</li></ul>若要支援舊版工作流程，<code>options</code> 也可以是文字值。這與 <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code> 具有相同的行爲。


## Examples

### Example #1 
將 &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; 轉換成 datetime 值。
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
將 &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; 轉換成 datetime 值。
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
將 &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; 轉換成 datetime 值。
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
將 &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; 轉換成 datetime 值。
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
