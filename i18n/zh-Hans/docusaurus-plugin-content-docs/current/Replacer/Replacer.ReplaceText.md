---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


在提供的输入内替换文本。


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

使用 `new` 文本替换原始 `text` 中的 `old` 文本。可以在 `List.ReplaceValue` 和 `Table.ReplaceValue` 中使用此替换器函数。


## Examples

### Example #1
在字符串 "hEllo world" 中使用 "He" 替换文本 "hE"。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
