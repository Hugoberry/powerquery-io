---
title: Date.AddYears
---

# Date.AddYears


Prie datos pridedami nurodyti metai.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` rezultatas pridėjus `numberOfYears` prie `datetime` reikšmės `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, prie kurios pridedami metai.
-   `numberOfYears`: pridėtinų metų skaičius.


## Examples

### Example #1
Pridėkite 4 metus prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Pridėkite 10 metų prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą ir laiką: 2011 05 14, 08:15:22 ryte.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
