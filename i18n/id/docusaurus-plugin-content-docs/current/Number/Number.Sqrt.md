---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Menghasilkan akar kuadrat dari bilangan.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Mengembalikan akar kuadrat dari <code>number</code>.    Jika <code>number</code> null, <code>Number.Sqrt</code> akan menghasilkan null. Jika nilainya negatif, <code>Number.NaN</code> akan dihasilkan (Bukan angka).


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
