---
title: Number.Permutations
---

# Number.Permutations


Menghasilkan jumlah permutasi.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Menghasilkan jumlah permutasi yang dapat dihasilkan dari sejumlah item, `setSize`, dengan ukuran permutasi yang ditetapkan, `permutationSize`.


## Examples

### Example #1
Mencari jumlah permutasi dari total 5 item dengan setiap permutasi berisi 3 item.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
