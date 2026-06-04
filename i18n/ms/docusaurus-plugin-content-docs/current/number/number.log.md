---
title: Number.Log
---

# Number.Log


Mengembalikan logaritma bagi nombor kepada asas yang tentukan (e lalai).


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

Mengembalikan logaritma bagi nombor, `number`, kepada asas `base` yang ditentukan. Jika `base` tidak ditentukan, nilai lalai ialah Number.E. Jika `number` ialah nol `Number.Ln` mengembalikan nol.


## Examples

### Example #1
Dapatkan logaritma asas 10 bagi 2.
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
Dapatkan logaritma asas e bagi 2.
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
