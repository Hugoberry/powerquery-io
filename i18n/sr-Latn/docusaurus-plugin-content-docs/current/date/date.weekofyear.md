---
title: Date.WeekOfYear
---

# Date.WeekOfYear


Vraća broj od 1 do 54 koji pokazuje u kojoj se sedmici u godini ovaj datum nalazi.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Remarks

Vraća broj od 1 do 54 koji pokazuje u kojoj se sedmici godine se nalazi datum `dateTime`.

-   `dateTime`: Vrednost `datetime` za koju se određuje sedmica u godini.
-   `firstDayOfWeek`: Opcionalna vrednost `Day.Type` koja ukazuje na to koji dan se smatra početkom nove sedmice (npr. `Day.Sunday`). Ako nije navedeno, koristi se podrazumevana vrednost koja zavisi od kulture.


## Examples

### Example #1
Odredite koja sedmica u godini sadrži 27. mart 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2
Odredite koja sedmica u godini sadrži 27. mart 2011, koristeći ponedeljak kao početak sedmice.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
