---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Замінює текст у введених даних.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Замінює текст `old` у вихідному `text` на текст `new`. Ця функція заміни може використовуватися в `List.ReplaceValue` і `Table.ReplaceValue`.


## Examples

### Example #1
Замінити текст "hE" на "He" у рядку "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
