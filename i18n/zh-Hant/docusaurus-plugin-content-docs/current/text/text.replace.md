---
title: Text.Replace
---

# Text.Replace


取代文字中所有出現的指定子字串。


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

傳回以文字值 `new` 取代文字值 `text` 中所有出現之文字值 `old` 的結果。這個函數會區分大小寫。


## Examples

### Example #1
以 "a" 取代句子中每一個出現的 "the"。
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
