---
title: Type.Is
---

# Type.Is


## Description

Menentukan jika nilai jenis pertama sentiasa serasi dengan jenis kedua.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Menentukan sama ada nilai <code>type1</code> sentiasa serasi dengan <code>type2</code>.


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
