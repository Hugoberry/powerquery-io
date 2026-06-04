---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Pateikia savaitės pabaigą.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Pateikiama savaitės, kurioje yra `dateTime`, pabaiga. Ši funkcija naudoja pasirinktinę `Day`, `firstDayOfWeek`, kad būtų nustatyta kaip pirmoji šio santykinio skaičiavimo savaitės diena. Numatytoji reikšmė yra `Day.Sunday`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, pagal kurią apskaičiuojama paskutinė savaitės diena
-   `firstDayOfWeek`: *(Pasirenkama)* `Day.Type` reikšmė, rodanti pirmą savaitės dieną. Galimos reikšmės `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` ir `Day.Saturday`. Numatytoji reikšmė yra `Day.Sunday`.


## Examples

### Example #1
Gauti 2011 05 14 svaitės pabaigą.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Gauti 2011 05 17 05:00:00 po pietų -7:00 savaitės pabaigą, kai pirmoji savaitės diena yra sekmadienis.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
