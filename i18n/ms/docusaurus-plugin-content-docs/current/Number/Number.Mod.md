---
title: Number.Mod
---

# Number.Mod


## Description

Integer membahagikan dua nombor dan mengembalikan bakinya.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Mengembalikan baki yang terhasil daripada pembahagian integer <code>number</code> dengan <code>divisor</code>.    Jika <code>number</code> atau <code>divisor</code> adalah nol, <code>Number.Mod</code> mengembalikan nol.      <ul>        <li><code>number</code>: Pembahagi.</li>        <li><code>divisor</code>: Pembahagi.</li>      </ul>


## Examples

### Example #1 
Cari baki apabila anda membahagikan 5 dengan 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
