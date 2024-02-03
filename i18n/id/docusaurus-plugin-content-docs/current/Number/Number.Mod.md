---
title: Number.Mod
---

# Number.Mod


## Description

Bilangan bulat membagi dua bilangan dan menghasilkan sisanya.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Mengembalikan sisa hasil pembagian bilangan bulat antara <code>number</code> dengan <code>divisor</code>.    Jika <code>number</code> atau <code>divisor</code> adalah null, <code>Number.Mod</code> akan menghasilkan null.      <ul>        <li><code>number</code>: Dividen.</li>        <li><code>divisor</code>: Pembagi.</li>      </ul>


## Examples

### Example #1 
Mencari sisa hasil pembagian 5 dengan 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
