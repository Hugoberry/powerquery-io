---
title: Text.Trim
---

# Text.Trim


## Description

移除所有開頭和尾端空白字元。


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

傳回從文字值 <code>text</code> 中移除所有開頭和尾端空白字元的結果。


## Examples

### Example #1 
從 &#34;     a b c d    &#34; 中移除開頭和尾端空白字元。
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
