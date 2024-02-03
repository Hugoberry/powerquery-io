---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

Returnerer resultatet af at runde positive tal ned og negative tal op. Antallet af cifre kan angives.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerer resultatet af at afrunde <code>number</code> på baggrund af tallets fortegn. Denne funktion runder positive tal ned og negative tal op.    Hvis <code>digits</code> er angivet, afrundes <code>number</code> til <code>digits</code> antallet af decimaltal.  


## Examples

### Example #1 
Rund tallet -1,2 ned mod nul.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Rund tallet 1,2 ned mod nul.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Afrund tallet -1,234 til to decimaler mod nul.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
