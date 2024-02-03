---
title: Number.Combinations
---

# Number.Combinations


## Description

Menghasilkan jumlah kombinasi unik.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Menghasilkan jumlah kombinasi unik dari daftar item, <code>setSize</code>, dengan ukuran kombinasi yang ditetapkan, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Jumlah item dalam daftar.</li>    <li><code>combinationSize</code>: Jumlah item dalam setiap kombinasi.</li></ul>


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
