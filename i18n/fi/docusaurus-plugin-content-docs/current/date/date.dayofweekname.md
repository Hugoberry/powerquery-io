---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


Palauttaa viikon päivän nimen.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Remarks

Palauttaa annetun `date` viikon päivän nimen. Valinnainen `culture` voidaan myös antaa (esimerkiksi en-US).


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
