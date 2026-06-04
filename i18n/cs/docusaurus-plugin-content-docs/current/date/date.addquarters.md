---
title: Date.AddQuarters
---

# Date.AddQuarters


Přičte zadaný počet čtvrtletí k datu.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Vrátí výsledek `date`, `datetime` nebo `datetimezone` z přičtení `numberOfQuarters` čtvrtletí k hodnotě `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ke které se přičítají čtvrtletí.
-   `numberOfQuarters`: Počet čtvrtletí, které se mají přičíst.


## Examples

### Example #1
Přičíst 1 čtvrtletí k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
