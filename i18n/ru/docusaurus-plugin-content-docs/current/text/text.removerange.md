---
title: Text.RemoveRange
---

# Text.RemoveRange


Удаляет заданное количество символов, начиная с заданного смещения


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Возвращает копию текстового значения `text`, в которой удалены все символы с позиции `offset`. Можно использовать необязательный параметр `count`, чтобы указать число символов, которое необходимо удалить. Значение `count` по умолчанию — 1. Значения позиций начинаются с 0.


## Examples

### Example #1
Удалить 1 символ из текстового значения "ABEFC" в позиции 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Удалить 2 символа из текстового значения "ABEFC", начиная с позиции 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
