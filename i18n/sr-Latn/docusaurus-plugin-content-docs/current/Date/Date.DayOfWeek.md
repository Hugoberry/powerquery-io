---
title: Date.DayOfWeek
---

# Date.DayOfWeek


## Description

Vraća broj (od 0 do 6) koji pokazuje dan u sedmici za navedenu vrednost.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Details

Vraća broj (od 0 do 6) koji pokazuje koji dan u sedmici za navedeni <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: Vrednost <code>datum</code>, <code>datum i vreme</code> ili <code>datum i vremenska zona</code>.</li>        <li><code>firstDayOfWeek</code>: Vrednost <code>dan</code> pokazuje koji dan treba smatrati prvim danom u sedmici. Dozvoljene vrednosti su Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ili Day.Saturday. Ako se ne navede, koristi se podrazumevana vrednost koja zavisi od kulture.</li>      </ul>


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
