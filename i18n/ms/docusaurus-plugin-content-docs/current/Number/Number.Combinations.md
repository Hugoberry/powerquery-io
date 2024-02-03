---
title: Number.Combinations
---

# Number.Combinations


## Description

Mengembalikan bilangan gabungan unik.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Mengembalikan bilangan gabungan unik daripada senarai item, <code>setSize</code> dengan saiz gabungan ditentukan, <code>combinationSize</code>.<ul>    <li><code>setSize</code>: Bilangan item dalam senarai.</li>    <li><code>combinationSize</code>: Bilangan item dalam setiap gabungan.</li></ul>


## Examples

### Example #1 
Cari bilangan gabungan daripada sejumlah 5 item apabila setiap gabungan ialah satu kumpulan 3 item.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
