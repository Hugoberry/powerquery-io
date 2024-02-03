---
title: Guid.From
---

# Guid.From


## Description

Mengembalikan nilai guid daripada nilai yang diberikan.


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

Mengembalikan nilai <code>Guid.Type</code> daripada <code>value</code> yang ditentukan. Jika <code>value</code> yang ditentukan adalah <code>nol</code>, <code>Guid.From</code> mengembalikan <code>nol</code>. Pemeriksaan akan dilaksanakan untuk menentukan jika <code>value</code> yang ditentukan berada dalam format yang boleh diterima. Format yang boleh diterima diberikan dalam contoh.


## Examples

### Example #1 
Guid boleh diberikan sebagai 32 digit perenambelasan berdampingan.
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
Guid boleh diberikan sebagai 32 digit perenambelasan yang dipisahkan oleh sempang menjadi blok 8-4-4-4-12.
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
Guid boleh diberikan sebagai 32 digit perenambelasan yang dipisahkan oleh sempang dan diletakkan dalam pendakap.
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
Guid boleh diberikan sebagai 32 digit perenambelasan yang dipisahkan oleh sempang dan diletakkan dalam kurungan.
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
