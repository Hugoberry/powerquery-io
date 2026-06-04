---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Вилучає діапазон символів і вставляє нове значення в певне положення.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Повертає результат вилучення кількості символів, `count`, з текстового значення `text`, що починається з положення `offset`, і вставлення текстового значення `newText` у те ж положення в `text`.


## Examples

### Example #1
Замінити один символ у положенні 2 текстового значення "ABGF" на нове текстове значення "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
