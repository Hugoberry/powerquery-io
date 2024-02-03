---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Vráti výsledok zaokrúhlenia kladných čísel nahor a záporných čísel nadol. Počet číslic je možné zadať.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Vráti výsledok zaokrúhlenia čísla <code>number</code> na základe znamienka čísla. Táto funkcia zaokrúhli kladné čísla nahor a záporné čísla nadol.    Ak je zadaná funkcia <code>digits</code>, <code>number</code> sa zaokrúhli na desatinné čísla (<code>digits</code>).  


## Examples

### Example #1 
Zaokrúhlite číslo –1,2 smerom od nuly.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Zaokrúhlite číslo 1,2 smerom od nuly.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrúhlenie čísla -1,234 na dve desatinné miesta smerom od nuly.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
