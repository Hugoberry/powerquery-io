---
title: Date.AddDays
---

# Date.AddDays


Přičte zadaný počet dní k datu.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Vrátí výsledek `date`, `datetime` nebo `datetimezone` z přičtení `numberOfDays` dní k hodnotě `datetime` `dateTime`.

-   `dateTime`: Hodnota `date`, `datetime` nebo `datetimezone`, ke které se přičítají dny.
-   `numberOfDays`: Počet dní, které se mají přičíst.


## Examples

### Example #1
Přičíst 5 dní k hodnotě `date`, `datetime` nebo `datetimezone` představující datum 14. 5. 2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
