---
title: Date.AddMonths
---

# Date.AddMonths


Přičte zadaný počet měsíců k datu.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Vrátí výsledek `date`, `datetime` nebo `datetimezone` z přičtení `numberOfMonths` měsíců k hodnotě `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ke které se přičítají měsíce.
-   `numberOfMonths`: Počet měsíců, které se mají přičíst.


## Examples

### Example #1
Přičíst 5 měsíců k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Přičíst 18 měsíců k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011, čas 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
