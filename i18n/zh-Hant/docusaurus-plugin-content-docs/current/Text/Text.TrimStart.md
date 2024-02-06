---
title: Text.TrimStart
---

# Text.TrimStart


移除所有開頭空白字元。


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

傳回從文字值 <code>text</code> 中移除所有開頭空白字元的結果。


## Examples

### Example #1 
從 &#34;     a b c d    &#34; 中移除開頭空白字元。
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
