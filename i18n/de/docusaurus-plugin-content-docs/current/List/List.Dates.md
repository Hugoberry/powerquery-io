---
title: List.Dates
---

# List.Dates


Generiert eine Liste mit date-Werten auf der Grundlage eines Anfangswerts, einer Anzahl und eines inkrementellen duration-Werts.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Gibt eine Liste mit <code>date</code>-Werten der Größe "<code>count</code>" ab "<code>start</code>" zurück. Das angegebene Inkrement (<code>step</code>) ist ein <code>duration</code>-Wert, der zu den einzelnen Werten addiert wird.


## Examples

### Example #1 
Erstellt eine Liste mit 5 Werten. Die Liste beginnt mit dem 31. Dezember 2011 (#date(2011, 12, 31)) und besitzt eine Schrittweite von einem Tag (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
