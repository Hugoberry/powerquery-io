---
title: Text.RemoveRange
---

# Text.RemoveRange


從指定的位移開始，移除某個數目的字元。


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

傳回文字值 <code>text</code> 的複本，並移除位置 <code>offset</code> 的所有字元。    可使用選擇性參數 <code>count</code> 來指定要移除的字元數。<code>count</code> 的預設值為 1。位置值從 0 開始。


## Examples

### Example #1 
從文字值 &#34;ABEFC&#34; 中移除位於位置 2 的 1 個字元。
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
從位置 2 開始，移除文字值 &#34;ABEFC&#34; 中的兩個字元。
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
