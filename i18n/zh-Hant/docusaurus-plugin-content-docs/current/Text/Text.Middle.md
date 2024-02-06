---
title: Text.Middle
---

# Text.Middle


傳回特定長度以內的子字串。


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

在位移 <code>start</code> 的位置傳回 <code>count</code> 個字元，或傳回一直到 <code>text</code> 的結尾。


## Examples

### Example #1 
從索引 6 開始跨 5 個字元，尋找文字 &#34;Hello World&#34; 中的子字串。
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
從索引 6 開始到結尾，尋找文字 &#34;Hello World&#34; 中的子字串。
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
