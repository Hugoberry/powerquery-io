---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Удаляет заданное количество символов, начиная с заданного смещения


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Возвращает копию текстового значения <code>text</code>, в которой удалены все символы с позиции <code>offset</code>.    Можно использовать необязательный параметр <code>count</code>, чтобы указать число символов, которое необходимо удалить. Значение <code>count</code> по умолчанию — 1. Значения позиций начинаются с 0.


## Examples

### Example #1 
Удалить 1 символ из текстового значения &#34;ABEFC&#34; в позиции 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Удалить 2 символа из текстового значения &#34;ABEFC&#34;, начиная с позиции 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
