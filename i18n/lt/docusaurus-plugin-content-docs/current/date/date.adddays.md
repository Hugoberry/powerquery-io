---
title: Date.AddDays
---

# Date.AddDays


Prie datos pridedamos nurodytos dienos.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Pateikiamas `date`, `datetime` arba `datetimezone` rezultatas pridėjus `numberOfDays` d. prie `datetime` reikšmės `dateTime`.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, prie kurios pridedamos dienos.
-   `numberOfDays`: pridėtinų dienų skaičius.


## Examples

### Example #1
Pridėkite 5 dienas prie `date`, `datetime` arba `datetimezone` reikšmės, atitinkančios datą 2011 05 14.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
