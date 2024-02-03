---
title: List.Accumulate
---

# List.Accumulate


## Description

Mengakumulasi nilai ringkasan dari item dalam daftar.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Details

Mengakumulasi nilai ringkasan dari item dalam daftar <code>list</code>, menggunakan <code>accumulator</code>.    Parameter turunan opsional, <code>seed</code>, dapat ditetapkan.


## Examples

### Example #1 
Mengakumulasi nilai ringkasan dari item dalam daftar \{1, 2, 3, 4, 5} menggunakan ((status, saat ini) =&gt; status + saat ini).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
