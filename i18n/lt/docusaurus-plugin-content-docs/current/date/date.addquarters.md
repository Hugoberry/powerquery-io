---
title: Date.AddQuarters
---

# Date.AddQuarters


Prie datos pridedami nurodyti ketvirčiai.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` rezultatas pridėjus `numberOfQuarters` ketv. prie `datetime` reikšmės `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, prie kurios pridedami ketvirčiai.
-   `numberOfQuarters`: pridėtinų ketvirčių skaičius.


## Examples

### Example #1
Pridėkite 1 ketvirtį prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
