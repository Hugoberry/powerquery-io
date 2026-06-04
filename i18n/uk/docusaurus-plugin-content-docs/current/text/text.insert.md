---
title: Text.Insert
---

# Text.Insert


Вставляє одне текстове значення в інше у вказану позицію.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Повертає результат вставлення текстового значення `newText` у текстове значення `text` у позицію `offset`. Положення починаються з числа 0.


## Examples

### Example #1
Вставити "C" між "B" і "D" у "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
