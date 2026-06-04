---
title: Type.Is
---

# Type.Is


Määrittää, onko ensimmäisen tyypin arvo aina yhteensopiva toisen tyypin kanssa.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Määrittää, onko `type1`\-arvo aina yhteensopiva `type2` kanssa. Parametrin `type2` on oltava primitiivityyppiarvo (tai tyhjäarvoja tukeva primitiivi). Muussa tapauksessa tämän funktion toimintaa ei ole määritetty, eikä siihen tule luottaa.


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
