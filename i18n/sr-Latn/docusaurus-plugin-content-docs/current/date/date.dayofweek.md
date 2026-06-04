---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Vraća broj (od 0 do 6) koji pokazuje dan u sedmici za navedenu vrednost.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Vraća broj (od 0 do 6) koji pokazuje koji dan u sedmici za navedeni `dateTime`.

-   `dateTime`: Vrednost `datum`, `datum i vreme` ili `datum i vremenska zona`.
-   `firstDayOfWeek`: Vrednost `dan` pokazuje koji dan treba smatrati prvim danom u sedmici. Dozvoljene vrednosti su Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ili Day.Saturday. Ako se ne navede, koristi se podrazumevana vrednost koja zavisi od kulture.


## Examples

### Example #1
Izračunajte koji je dan u sedmici ponedeljak, 21. februar 2011, uzimajući nedelju kao prvi dan u sedmici.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Izračunajte koji je dan u sedmici ponedeljak, 21. februar 2011, uzimajući ponedeljak kao prvi dan u sedmici.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
