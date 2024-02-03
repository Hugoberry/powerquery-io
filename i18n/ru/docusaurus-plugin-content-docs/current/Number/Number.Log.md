---
title: Number.Log
---

# Number.Log


## Description

Возвращает логарифм числа по указанному основанию (по умолчанию e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Возвращает логарифм числа <code>number</code> по основанию <code>base</code>. Если <code>base</code> не указано, применяется значение по умолчанию — Number.E.    Если <code>number</code> имеет значение NULL, <code>Number.Log</code> возвращает NULL.


## Examples

### Example #1 
Получение десятичного логарифма для 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2 
Получение натурального логарифма для 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
