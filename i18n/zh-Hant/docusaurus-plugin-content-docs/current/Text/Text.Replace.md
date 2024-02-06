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

傳回以文字值 <code>new</code> 取代文字值 <code>text</code> 中所有出現之文字值 <code>old</code> 的結果。這個函數會區分大小寫。


## Examples

### Example #1 
以 &#34;a&#34; 取代句子中每一個出現的 &#34;the&#34;。
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
