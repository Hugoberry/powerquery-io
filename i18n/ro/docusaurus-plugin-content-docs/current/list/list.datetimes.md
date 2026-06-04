---
title: List.DateTimes
---

# List.DateTimes


Generează o listă de valori datetime dintr-o valoare iniţială, un număr şi o valoare pentru durată incrementală.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Returnează o listă de valori `datetime` de dimensiunea `count`, începând de la `start`. Incrementul dat, `step`, este o valoare `duration` care este adăugată la fiecare valoare.


## Examples

### Example #1
Creaţi o listă de 10 valori începând de la 5 minute înainte de Revelion (#datetime(2011, 12, 31, 23, 55, 0)) crescând cu 1 minut (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
