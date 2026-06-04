---
title: Number.RoundUp
---

# Number.RoundUp


Vrátí následující nejvyšší číslo. Dá se zadat počet číslic.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Vrátí výsledek zaokrouhlení hodnoty `number` nahoru na nejbližší následující celé číslo. Pokud má `number` hodnotu null, vrátí tato funkce hodnotu null. Pokud se zadá `digits`, `number` se zaokrouhlí na zadaný počet desetinných číslic.


## Examples

### Example #1
Zaokrouhlí číslo 1,234 nahoru na celé číslo.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Zaokrouhlí číslo 1,999 nahoru na celé číslo.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrouhlete číslo 1,234 nahoru na dvě desetinná místa.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
