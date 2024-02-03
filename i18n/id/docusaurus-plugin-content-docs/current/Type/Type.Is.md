---
title: Type.Is
---

# Type.Is


## Description

Menentukan apakah nilai tipe pertama selalu kompatibel dengan tipe kedua.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Menentukan apakah nilai <code>type1</code> selalu kompatibel dengan <code>type2</code>.


## Examples

### Example #1 
Tentukan apakah nilai dengan tipe angka juga selalu dapat diperlakukan sebagai tipe apa pun.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Tentukan apakah nilai dengan tipe apa pun juga selalu dapat diperlakukan sebagai tipe angka.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
