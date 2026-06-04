---
title: Date.AddMonths
---

# Date.AddMonths


Prie datos pridedami nurodyti mėnesiai.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` rezultatas pridėjus `numberOfMonths` mėn. prie `datetime` reikšmės `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, prie kurios pridedami mėnesiai.
-   `numberOfMonths`: pridėtinų mėnesių skaičius.


## Examples

### Example #1
Pridėkite 5 mėn. prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Pridėkite 18 mėn. prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą ir laiką: 2011 05 14, 08:15:22 ryte.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
