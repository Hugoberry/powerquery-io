---
title: Number.Power
---

# Number.Power


Возводит число в заданную степень.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Возвращает результат возведения <code>number</code> в степень <code>power</code>.    Если <code>number</code> или <code>power</code> равно NULL, <code>Number.Power</code> возвращает NULL.      <ul>        <li><code>number</code>: основание.</li>        <li><code>power</code>: показатель степени.</li>      </ul>


## Examples

### Example #1 
Найти значение 5 в степени 3 (5 в кубе).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
