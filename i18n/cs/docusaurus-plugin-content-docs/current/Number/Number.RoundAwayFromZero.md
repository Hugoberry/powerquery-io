---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Vrátí výsledek zaokrouhlení kladných čísel nahoru a záporných čísel dolů. Dá se zadat počet číslic.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Vrátí výsledek zaokrouhlení hodnoty <code>number</code> na základě znaménka čísla. Tato funkce zaokrouhlí kladná čísla nahoru a záporná čísla dolů.    Pokud se zadá <code>digits</code>, <code>number</code> se zaokrouhlí na tento počet desetinných číslic: <code>digits</code>.  


## Examples

### Example #1 
Zaokrouhlí číslo -1,2 směrem od nuly.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Zaokrouhlí číslo 1,2 směrem od nuly.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrouhlete číslo -1,234 na dvě desetinná místa od nuly.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
