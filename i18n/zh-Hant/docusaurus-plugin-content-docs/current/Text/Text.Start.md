---
title: Text.Start
---

# Text.Start


傳回文字的開頭。


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

將 <code>text</code> 的前 <code>count</code> 個字元傳回成文字值。


## Examples

### Example #1 
取得 &#34;Hello, World&#34; 的前 5 個字元。
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
