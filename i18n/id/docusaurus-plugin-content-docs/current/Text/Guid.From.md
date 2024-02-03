---
title: Guid.From
---

# Guid.From


## Description

Menghasilkan nilai guid dari nilai yang diberikan.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Menghasilkan nilai <code>Guid.Type</code> dari <code>value</code> tertentu. Jika <code>value</code> yang diberikan adalah <code>null</code>, <code>Guid.From</code> menghasilkan <code>null</code>.  Pemeriksaan akan dilakukan untuk menentukan apakah <code>value</code> yang diberikan dalam format yang dapat diterima. Format yang sesuai disediakan di contoh.


## Examples

### Example #1 
Guid dapat disediakan sebagai 32 digit heksadesimal berdekatan.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid dapat disediakan sebagai 32 digit heksadesimal yang dipisahkan tanda hubung ke dalam blok 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid dapat disediakan sebagai 32 digit heksadesimal yang dipisahkan tanda hubung dan ditutup kurung kurawal.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid dapat disediakan sebagai 32 digit heksadesimal yang dipisahkan tanda hubung dan ditutup tanda kurung.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
