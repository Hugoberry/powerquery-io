---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


取代提供之輸入中的文字。


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

以 `new` 文字取代原始 `text` 中的 `old` 文字。這個取代子函數可用於 `List.ReplaceValue` 和 `Table.ReplaceValue` 中。


## Examples

### Example #1
以 "He" 取代字串 "hEllo world" 中的文字 "hE"。
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
