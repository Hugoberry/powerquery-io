---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

移除某個範圍的字元並在指定的位置插入新的值。


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

傳回從文字值 <code>text</code> 中移除一些字元 <code>count</code> (從位置 <code>offset</code> 開始)，然後在 <code>text</code> 中的相同位置插入文字值 <code>newText</code> 的結果。


## Examples

### Example #1 
以新的文字值 &#34;CDE&#34; 取代文字值 &#34;ABGF&#34; 中位於位置 2 的單一字元。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
