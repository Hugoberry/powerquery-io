---
title: List.Durations
---

# List.Durations


## Description

Generiert eine Liste mit duration-Werten auf der Grundlage eines Anfangswerts, einer Anzahl und eines inkrementellen duration-Werts.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Gibt eine Liste mit <code>count</code> <code>duration</code>-Werten zurück. Die Liste beginnt bei "<code>start</code>", und die Schrittweite entspricht dem angegebenen <code>duration</code>-Wert (<code>step</code>).


## Examples

### Example #1 
Erstellt eine Liste mit 5 Werten, beginnend mit 1 Stunde und einer Werteerhöhung von jeweils 1 Stunde.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
