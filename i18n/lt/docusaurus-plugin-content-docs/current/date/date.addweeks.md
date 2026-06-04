---
title: Date.AddWeeks
---

# Date.AddWeeks


Prie datos pridedamos nurodytos savaitės.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` rezultatas pridėjus `numberOfWeeks` sav. prie `datetime` reikšmės `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, prie kurios pridedamos savaitės.
-   `numberOfWeeks`: pridėtinų savaičių skaičius.


## Examples

### Example #1
Pridėkite 5 savaites prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
