---
title: Number.Log
---

# Number.Log


## Description

Повертає логарифм числа до вказаної основи (e за замовчуванням).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Details

Повертає логарифм числа (<code>number</code>) за вказаною основою (<code>base</code>). Якщо параметр <code>base</code> не вказано, використовується стандартне значення Number.E.    Якщо параметр <code>number</code> має Null-значення, функція <code>Number.Log</code> повертає Null-значення.


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
