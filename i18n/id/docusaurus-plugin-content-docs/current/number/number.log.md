---
title: Number.Log
---

# Number.Log


Menghasilkan logaritma dari suatu bilangan untuk basis yang ditetapkan (default e).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Mengembalikan logaritma bilangan, `number`, untuk basis `base` yang ditetapkan. Jika `base` tidak ditetapkan, nilai default adalah Number.E. Jika `number` null `Number.Log` akan menghasilkan null.


## Examples

### Example #1
Mengambil logaritma basis-10 dari 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Mengambil logaritma basis-e dari 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
