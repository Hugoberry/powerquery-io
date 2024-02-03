---
title: Type.Is
---

# Type.Is


## Description

Määrittää, onko ensimmäisen tyypin arvo aina yhteensopiva toisen tyypin kanssa.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Määrittää, onko <code>type1</code> arvo aina yhteensopiva <code>type2</code> kanssa.


## Examples

### Example #1 
Selvitä, voidaanko tyyppinumeron arvoa aina käsitellä myös tyyppinä mikä tahansa.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Selvittää, voidaanko minkä tahansa tyyppistä arvoa käsitellä aina myös tyyppilukuna.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
