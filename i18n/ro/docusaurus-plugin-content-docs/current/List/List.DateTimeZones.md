---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Generează o listă de valori datetimezone dintr-o valoare iniţială, un număr şi o valoare pentru durată incrementală.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Returnează o listă de valori <code>datetimezone</code> de dimensiunea <code>count</code>, începând de la <code>start</code>. Incrementul dat, <code>step</code>, este o valoare <code>duration</code> care este adăugată la fiecare valoare.


## Examples

### Example #1 
Creaţi o listă de 10 valori începând de la 5 minute înainte de Revelion (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) crescând cu 1 minut (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
