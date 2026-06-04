---
title: Number.Log
---

# Number.Log


Повертає логарифм числа до вказаної основи (e за замовчуванням).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Повертає логарифм числа (`number`) за вказаною основою (`base`). Якщо параметр `base` не вказано, використовується стандартне значення Number.E. Якщо параметр `number` має Null-значення, функція `Number.Log` повертає Null-значення.


## Examples

### Example #1
Отримати логарифм числа 2 за основою 10.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Отримати логарифм числа 2 за основою e.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
