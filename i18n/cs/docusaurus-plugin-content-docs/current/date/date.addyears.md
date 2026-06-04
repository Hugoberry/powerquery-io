---
title: Date.AddYears
---

# Date.AddYears


Přičte zadaný počet roků k datu.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Vrátí výsledek `date`, `datetime` nebo `datetimezone` z přičtení `numberOfYears` roků k hodnotě `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ke které se přičítají roky.
-   `numberOfYears`: Počet roků, které se mají přičíst.


## Examples

### Example #1
Přičíst 4 roky k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Přičíst 10 let k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011, čas 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
