---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Palauttaa viikon päivän nimen.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Palauttaa annetun <code>date</code> viikon päivän nimen. Valinnainen <code>culture</code> voidaan myös antaa (esimerkiksi en-US).


## Examples

### Example #1 
Nouda viikon päivän nimi.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
