---
title: Type.Is
---

# Type.Is


Menentukan jika nilai jenis pertama sentiasa serasi dengan jenis kedua.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Menentukan jika nilai `type1` sentiasa serasi dengan `type2`. Nilai parameter `type2` mestilah nilai jenis primitif (atau primitif nol). Jika tidak, tingkah laku fungsi ini tidak ditakrifkan dan tidak sepatutnya diteruskan.


## Examples

### Example #1
Tentukan sama ada nilai bagi jenis nombor boleh juga sentiasa dianggap sebagai jenis mana-mana.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Tentukan sama ada nilai jenis mana-mana boleh juga sentiasa dianggap sebagai jenis nombor.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
