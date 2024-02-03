---
title: List.Accumulate
---

# List.Accumulate


## Description

Mengumpulkan nilai ringkasan daripada item dalam senarai.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Mengumpulkan nilai ringkasan daripada item dalam senarai <code>list</code>, menggunakan <code>accumulator</code>.    Parameter benih pilihan, <code>seed</code>, mungkin disetkan.


## Examples

### Example #1 
Mengumpulkan nilai ringkasan daripada item dalam senarai \{1, 2, 3, 4, 5} menggunakan ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
