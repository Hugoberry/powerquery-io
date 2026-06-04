---
title: Type.Is
---

# Type.Is


Določi, ali je vrednost prvega tipa vedno združljiva z drugo vrsto.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Določi, ali je vrednost `type1` vedno združljiva z `type2`. Parameter `type2` mora biti temeljni (ali primitivni) vrednosti z ničelno vrednostjo. V nasprotnem primeru delovanje te funkcije ni določeno in se ne smete sklicevati nanje.


## Examples

### Example #1
Ugotovite, ali je vrednost števila tipa mogoče vedno obravnavati kot katero koli vrsto.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali je vrednost vrste lahko vedno obravnavana kot številka tipa.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
