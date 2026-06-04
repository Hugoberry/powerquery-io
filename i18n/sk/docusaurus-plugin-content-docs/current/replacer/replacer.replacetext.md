---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Nahradí text v rámci uvedeného vstupu.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Nahradí text `old` v pôvodnom zázname `text` textom `new`. Túto funkciu nahrádzača možno použiť v časti `List.ReplaceValue` a `Table.ReplaceValue`.


## Examples

### Example #1
Nahraďte text "hE" textom "He" v reťazci "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
