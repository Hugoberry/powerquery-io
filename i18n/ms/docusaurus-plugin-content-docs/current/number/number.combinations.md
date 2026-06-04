---
title: Number.Combinations
---

# Number.Combinations


Mengembalikan bilangan gabungan unik.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Mengembalikan bilangan gabungan unik daripada senarai item, `setSize` dengan saiz gabungan ditentukan, `combinationSize`.

-   `setSize`: Bilangan item dalam senarai.
-   `combinationSize`: Bilangan item dalam setiap gabungan.


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
