---
title: Text.Replace
---

# Text.Replace


替换文本中所有出现的给定子字符串。


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

返回将文本值 `text` 中所有出现的文本值 `old` 替换为文本值 `new` 的结果。此函数区分大小写。


## Examples

### Example #1
将句子中出现的每个 "the" 替换为 "a"。
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
