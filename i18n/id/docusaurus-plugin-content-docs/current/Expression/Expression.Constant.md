---
title: Expression.Constant
---

# Expression.Constant


## Description

Menghasilkan representasi kode sumber M dari nilai konstan.


## Syntax

```powerquery
Expression.Constant(
    value as any
) as text
```


## Details

Menghasilkan representasi kode sumber M dari nilai konstan.


## Examples

### Example #1 
Dapatkan representasi kode sumber M dari nilai angka.
```powerquery
Expression.Constant(123)
```

Result: 
```powerquery
"123"
```


### Example #2 
Dapatkan representasi kode sumber M dari nilai tanggal.
```powerquery
Expression.Constant(#date(2035, 01, 02))
```

Result: 
```powerquery
"#date(2035, 1, 2)"
```


### Example #3 
Dapatkan representasi kode sumber M dari nilai teks.
```powerquery
Expression.Constant("abc")
```

Result: 
```powerquery
"""abc"""
```




## Category
Expression
