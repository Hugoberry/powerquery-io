---
title: Number.Sqrt
---

# Number.Sqrt


Vrátí druhou odmocninu čísla.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Vrátí druhou odmocninu hodnoty `number`. Pokud je hodnota `number` null, funkce `Number.Sqrt` vrátí hodnotu null. Pokud je hodnota záporná, funkce vrátí hodnotu `Number.NaN` (není číslo).


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
