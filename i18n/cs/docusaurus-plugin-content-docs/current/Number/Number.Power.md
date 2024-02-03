---
title: Number.Power
---

# Number.Power


## Description

Umocní číslo daným exponentem.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Details

Vrátí výsledek umocnění čísla <code>number</code> exponentem <code>power</code>.    Pokud je hodnota <code>number</code> nebo <code>power</code> null, funkce <code>Number.Power</code> vrátí hodnotu null.      <ul>        <li><code>number</code>: Základ</li>        <li><code>power</code>: Exponent</li>      </ul>


## Examples

### Example #1 
Vrátí hodnotu 5 umocněnou exponentem 3.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
