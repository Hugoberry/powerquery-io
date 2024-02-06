---
title: Text.From
---

# Text.From


根據指定的值建立文字值。


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

傳回 <code>value</code> 的文字表示法。<code>value</code> 可以是 <code>number</code>、<code>date</code>、<code>time</code>、<code>datetime</code>、<code>datetimezone</code>、<code>logical</code>、<code>duration</code> 或 <code>binary</code> 值。    如果指定的值為 null，則 <code>Text.From</code> 會傳回 null。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
根據數字 3 建立文字值。
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
