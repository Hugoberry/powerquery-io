---
title: List.Average
---

# List.Average


Vrátí průměrnou hodnotu hodnot. Pracuje s hodnotami number, date, datetime, datetimezone a duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Vrátí průměrnou hodnotu položek v seznamu `list`. Výsledek je stejného datového typu jako hodnoty v seznamu. Pracuje pouze s hodnotami typu number, date, time, datetime, datetimezone a duration. Pokud je seznam prázdný, vrátí prázdnou hodnotu null.


## Examples

### Example #1
Vyhledá průměrnou hodnotu seznamu čísel `{3, 4, 6}`.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2
Vyhledá průměrnou hodnotu hodnot date January 1, 2011, January 2, 2011 a January 3, 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
