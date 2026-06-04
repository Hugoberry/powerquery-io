---
title: Type.Is
---

# Type.Is


Menentukan apakah nilai tipe pertama selalu kompatibel dengan tipe kedua.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Menentukan apakah nilai `type1` selalu kompatibel dengan `type2`. Parameter `type2` harus berupa nilai tipe primitif (atau primitif yang dapat dinihilkan). Jika tidak, perilaku fungsi ini tidak ditentukan dan tidak boleh diandalkan.


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
