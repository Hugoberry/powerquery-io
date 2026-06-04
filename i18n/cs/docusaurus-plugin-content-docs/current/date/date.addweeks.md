---
title: Date.AddWeeks
---

# Date.AddWeeks


Přičte zadaný počet týdnů k datu.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Vrátí výsledek `date`, `datetime` nebo `datetimezone` z přičtení `numberOfWeeks` týdnů k hodnotě `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ke které se přičítají týdny.
-   `numberOfWeeks`: Počet týdnů, které se mají přičíst.


## Examples

### Example #1
Přičíst 2 týdny k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
