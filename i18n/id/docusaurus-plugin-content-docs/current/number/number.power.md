---
title: Number.Power
---

# Number.Power


Menggunakan bilangan dengan pangkat tertentu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Mengembalikan hasil dari menggunakan `number` dengan pangkat `power`. Jika `number` atau `power` adalah null, `Number.Power` akan menghasilkan null.

-   `number`: Bilangan pokok.
-   `power`: Eksponen.


## Examples

### Example #1
Mencari nilai bilangan 5 yang digunakan dengan pangkat 3 (5 pangkat 3).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
