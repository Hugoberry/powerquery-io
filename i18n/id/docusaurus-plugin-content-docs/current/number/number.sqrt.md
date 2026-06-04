---
title: Number.Sqrt
---

# Number.Sqrt


Menghasilkan akar kuadrat dari bilangan.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Mengembalikan akar kuadrat dari `number`. Jika `number` null, `Number.Sqrt` akan menghasilkan null. Jika nilainya negatif, `Number.NaN` akan dihasilkan (Bukan angka).


## Examples

### Example #1
Mencari akar kuadrat dari 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Mencari akar kuadrat dari 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
