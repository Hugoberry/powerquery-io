---
title: Number.Mod
---

# Number.Mod


## Description

Функція цілочисельного ділення ділить два числа та повертає залишок.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Повертає залишок від цілочисельного ділення <code>number</code> на <code>divisor</code>.    Якщо <code>number</code> або <code>divisor</code> має Null-значення, функція <code>Number.Mod</code> повертає Null-значення.      <ul>        <li><code>number</code>: ділене.</li>        <li><code>divisor</code>: дільник.</li>      </ul>


## Examples

### Example #1 
Знайти залишок від ділення 5 на 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
