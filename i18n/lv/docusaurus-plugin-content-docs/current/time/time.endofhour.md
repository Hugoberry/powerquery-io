---
title: Time.EndOfHour
---

# Time.EndOfHour


Atgriež stundas beigas.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

Atgriež stundas beigas, kas apzīmētas ar `dateTime`, ieskaitot sekunžu daļas. Tiek saglabāta informācija par laika joslu.

-   `dateTime`: `time`, `datetime` vai `datetimezone` vērtība, no kuras tiek aprēķinātas stundas beigas.


## Examples

### Example #1
Iegūstiet 14.05.2011. 17:00:00 stundas beigas.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
Iegūstiet 17.05.2011. 17:00:00–7:00 stundas beigas.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
