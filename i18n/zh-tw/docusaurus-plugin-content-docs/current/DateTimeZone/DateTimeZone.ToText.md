---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

傳回 datetimezone 值的文字表示。


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

傳回以文字表示的 <code>dateTimeZone</code>。可能會提供選用的<code>record</code>參數 (<code>options</code>) 來指定其他屬性。<code>culture</code> 僅用於舊版工作流程。<code>record</code> 可能包含下列欄位:<ul>   <li><code>Format</code>: <code>text</code> 值，表示要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 <code>null</code> 將會導致使用 <code>Culture</code> 定義的預設將日期格式化。</li>   <li><code>Culture</code>: 當 <code>Format</code> 不是 null 時，<code>Culture</code> 會控制一些格式規範。例如，在 <code>"en-US"</code> 中，<code>"MMM"</code> 為 <code>"Jan", "Feb", "Mar", ...</code>，在 <code>"ru-RU"</code> 中，<code>"MMM"</code> 為 <code>"янв", "фев", "мар", ...</code>。當 <code>Format</code> 是 <code>null</code> 時，<code>Culture</code> 會控制要使用的預設格式。當 <code>Culture</code> 是 <code>null</code> 或已省略時，會使用 <code>Culture.Current</code>。</li></ul>若要支援舊版工作流程，<code>options</code> 與 <code>culture</code> 也可以是文字值。這與 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> 具有相同的行爲。


## Examples

### Example #1 
將 &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; 轉換爲 &lt;code&gt;text&lt;/code&gt; 值。&lt;i&gt;結果輸出可能因目前文化特性而有所不同。&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
使用自訂格式和德文文化特性進行轉換。
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
使用 ISO 8601 模式進行轉換。
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
