---
title: Number.Combinations
---

# Number.Combinations


Menghasilkan jumlah kombinasi unik.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Menghasilkan jumlah kombinasi unik dari daftar item, `setSize`, dengan ukuran kombinasi yang ditetapkan, `combinationSize`.

-   `setSize`: Jumlah item dalam daftar.
-   `combinationSize`: Jumlah item dalam setiap kombinasi.


## Examples

### Example #1
Mencari jumlah kombinasi dari total 5 item dengan setiap kombinasi berisi 3 item.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
