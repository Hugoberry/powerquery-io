---
title: Number.Mod
---

# Number.Mod


## Description

Provede celočíselné dělení dvou čísel a vrátí zbytek.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Vrátí zbytek celočíselného dělení čísla <code>number</code> číslem <code>divisor</code>.    Pokud je hodnota <code>number</code> nebo <code>divisor</code> null, funkce <code>Number.Mod</code> vrátí hodnotu null.      <ul>        <li><code>number</code>: Dělenec</li>        <li><code>divisor</code>: Dělitel</li>      </ul>


## Examples

### Example #1 
Zjistí zbytek po dělení čísla 5 číslem 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
