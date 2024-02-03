---
title: Expression.Identifier
---

# Expression.Identifier


## Description

Menghasilkan representasi kode sumber M dari pengidentifikasi.


## Syntax

```powerquery
Expression.Identifier(
    name as text
) as text
```


## Details

Menghasilkan representasi kode sumber M dari pengidentifikasi <code>name</code>.


## Examples

### Example #1 
Dapatkan representasi kode sumber M dari pengidentifikasi.
```powerquery
Expression.Identifier("MyIdentifier")
```

Result: 
```powerquery
"MyIdentifier"
```


### Example #2 
Dapatkan representasi kode sumber M dari pengidentifikasi yang berisi spasi.
```powerquery
Expression.Identifier("My Identifier")
```

Result: 
```powerquery
"#""My Identifier"""
```




## Category
Expression
