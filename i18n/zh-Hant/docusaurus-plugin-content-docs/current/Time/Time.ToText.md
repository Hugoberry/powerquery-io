---
title: Time.ToText
---

# Time.ToText


傳回時間值的文字表示法。


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

傳回以文字表示的 <code>time</code>。可能會提供選用的 <code>record</code> 參數 (<code>options</code>) 來指定其他屬性。<code>culture</code> 僅用於舊版工作流程。<code>record</code> 可能包含下列欄位:<ul>   <li><code>Format</code>: A <code>text</code> 值，表示要使用的格式。如需詳細資料，請前往 https://go.microsoft.com/fwlink/?linkid=2180104 與 https://go.microsoft.com/fwlink/?linkid=2180105。省略此欄位或提供 <code>null</code> 將會導致使用 <code>Culture</code> 定義的預設將日期格式化。</li>   <li><code>Culture</code>: 當 <code>Format</code> 不是 null 時，<code>Culture</code> 會控制一些格式規範。例如，在 <code>"en-US"</code> 中，<code>"tt"</code> 為 <code>"AM" 或 "PM"</code>，在 <code>"ar-EG"</code> 中，<code>"tt"</code> 為 <code>"ص" 或 "م", ...</code>。當 <code>Format</code> 是 <code>null</code> 時，<code>Culture</code> 會控制要使用的預設格式。當 <code>Culture</code> 是 <code>null</code> 或已省略時，會使用 <code>Culture.Current</code>。</li></ul>若要支援舊版工作流程，<code>options</code> 與 <code>culture</code> 也可以是文字值。這與 <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code> 具有相同的行爲。


## Examples

### Example #1 
將 &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; 轉換爲 &lt;code&gt;text&lt;/code&gt; 值。&lt;i&gt;結果輸出可能因目前文化特性而有所不同。&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
使用自訂格式和德文文化特性進行轉換。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
使用標準時間格式進行轉換。
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
