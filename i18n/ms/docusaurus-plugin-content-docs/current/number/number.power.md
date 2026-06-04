---
title: Number.Power
---

# Number.Power


Menguasakan nombor kepada kuasa yang ditentukan.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Mengembalikan hasil daripada menguasakan `number` kepada kuasa `power`. Jika `number` atau `power` adalah nol, `Number.Power` mengembalikan nol.

-   `number`: Asas.
-   `power`: Eksponen.


## Examples

### Example #1
Cari nilai bagi 5 yang dikuasakan kepada kuasa 3 (5 kuasa tiga).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
