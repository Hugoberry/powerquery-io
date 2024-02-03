---
title: Date.MonthName
---

# Date.MonthName


## Description

Palauttaa kuukauden nimen osan.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Palauttaa annetun kohteen <code>date</code> kuukausiosan nimen. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Nouda kuukauden nimi.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
