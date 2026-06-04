---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Vrátí výsledek zaokrouhlení kladných čísel dolů a záporných čísel nahoru. Dá se zadat počet číslic.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vrátí výsledek zaokrouhlení hodnoty `number` na základě znaménka čísla. Tato funkce zaokrouhlí kladná čísla dolů a záporná čísla nahoru. Pokud se zadá `digits`, `number` se zaokrouhlí na tento počet desetinných číslic: `digits`.


## Examples

### Example #1
Zaokrouhlí číslo -1,2 směrem k nule.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Zaokrouhlí číslo 1,2 směrem k nule.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Zaokrouhlete číslo -1,234 na dvě desetinná místa k nule.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
