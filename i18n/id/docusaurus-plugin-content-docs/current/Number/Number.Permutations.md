---
title: Number.Permutations
---

# Number.Permutations


## Description

Menghasilkan jumlah permutasi.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

Menghasilkan jumlah permutasi yang dapat dihasilkan dari sejumlah item, <code>setSize</code>, dengan ukuran permutasi yang ditetapkan, <code>permutationSize</code>.


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
