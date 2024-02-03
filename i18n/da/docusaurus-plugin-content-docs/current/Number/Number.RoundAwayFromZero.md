---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Returnerer resultatet af at runde positive tal op og negative tal ned. Antallet af cifre kan angives.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returnerer resultatet af at afrunde <code>number</code> på baggrund af tallets fortegn. Denne funktion runder positive tal op og negative tal ned.    Hvis <code>digits</code> er angivet, afrundes <code>number</code> til <code>digits</code> antallet af decimaltal.  


## Examples

### Example #1 
Rund tallet -1,2 væk fra nul.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Rund tallet 1,2 væk fra nul.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Afrund tallet -1,234 til to decimaltal væk fra nul.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
