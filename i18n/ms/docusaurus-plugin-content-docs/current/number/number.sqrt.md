---
title: Number.Sqrt
---

# Number.Sqrt


Mengembalikan punca kuasa dua bagi nombor.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Mengembalikan punca kuasa dua bagi `number`. Jika `number` adalah nol, `Number.Sqrt` mengembalikan nol. Jika ia adalah nilai negatif, `Number.NaN` dikembalikan (Bukan nombor).


## Examples

### Example #1
Cari punca kuasa dua bagi 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Cari punca kuasa dua bagi 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
