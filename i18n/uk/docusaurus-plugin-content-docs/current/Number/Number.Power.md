---
title: Number.Power
---

# Number.Power


## Description

Підносить число до заданого степеню.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Повертає результат піднесення <code>number</code> до степеня <code>power</code>.    Якщо <code>number</code> або <code>power</code> має Null-значення, функція <code>Number.Power</code> повертає Null-значення.      <ul>        <li><code>number</code>: основа.</li>        <li><code>power</code>: експонента.</li>      </ul>


## Examples

### Example #1 
Знайти значення 5 піднесено в степені до 3 (5 в кубі).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
