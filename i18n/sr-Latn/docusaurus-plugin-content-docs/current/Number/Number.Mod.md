---
title: Number.Mod
---

# Number.Mod


## Description

Ceo broj deli dva broja i vraća ostatak.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Ceo broj deli <code>number</code> sa <code>divisor</code> i vraća ostatak.    Ako su <code>number</code> ili <code>divisor</code> bez vrednosti, <code>Number.Mod</code> vraća rezultat bez vrednosti.      <ul>        <li><code>number</code>: Deljenik.</li>        <li><code>divisor</code>: Delilac.</li>      </ul>


## Examples

### Example #1 
Pronalaženje ostatka prilikom deljenja 5 sa 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
