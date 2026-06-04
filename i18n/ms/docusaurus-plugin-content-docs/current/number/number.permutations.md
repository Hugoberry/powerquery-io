---
title: Number.Permutations
---

# Number.Permutations


Mengembalikan bilangan pilih atur.


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

Mengembalikan bilangan pilih atur yang boleh dijana daripada bilangan item, `setSize`, dengan saiz pilih atur yang ditentukan, `permutationSize`.


## Examples

### Example #1
Cari bilangan pilih atur daripada sejumlah 5 item dalam kumpulan 3 item.
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
