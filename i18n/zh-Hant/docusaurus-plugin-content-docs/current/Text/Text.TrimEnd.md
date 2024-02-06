---
title: Text.TrimEnd
---

# Text.TrimEnd


移除所有尾端空白字元。


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

傳回從文字值 <code>text</code> 中移除所有尾端空白字元的結果。


## Examples

### Example #1 
從 &#34;     a b c d    &#34; 中移除尾端空白字元。
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
