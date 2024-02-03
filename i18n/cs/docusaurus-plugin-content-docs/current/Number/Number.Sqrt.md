---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Vrátí druhou odmocninu čísla.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Vrátí druhou odmocninu hodnoty <code>number</code>.    Pokud je hodnota <code>number</code> null, funkce <code>Number.Sqrt</code> vrátí hodnotu null. Pokud je hodnota záporná, funkce vrátí hodnotu <code>Number.NaN</code> (není číslo).


## Examples

### Example #1 
Vrátí druhou odmocninu čísla 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Vrátí druhou odmocninu čísla 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
