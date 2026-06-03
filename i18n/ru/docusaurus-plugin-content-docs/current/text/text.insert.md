---
title: Text.Insert
---

# Text.Insert


Вставляет одно текстовое значение в другое в заданной позиции.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Возвращает результат вставки текстового значения `newText` в текстовое значение `text` в позиции `offset`. Позиции начинаются с номера 0.


## Examples

### Example #1
Вставить "C" между "B" и "D" в "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
