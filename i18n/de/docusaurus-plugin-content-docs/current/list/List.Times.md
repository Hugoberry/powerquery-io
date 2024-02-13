---
title: List.Times
---

# List.Times


Generiert eine Liste mit time-Werten auf der Grundlage eines Anfangswerts, einer Anzahl und eines inkrementellen duration-Werts.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Gibt eine Liste mit <code>time</code>-Werten der Größe "<code>count</code>" ab "<code>start</code>" zurück. Das angegebene Inkrement (<code>step</code>) ist ein <code>duration</code>-Wert, der zu den einzelnen Werten addiert wird.


## Examples

### Example #1 
Erstellt eine Liste mit vier Werten. Die Liste beginnt mittags (#time (12, 0, 0)) und besitzt eine Schrittweite von einer Stunde (#duration (0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
