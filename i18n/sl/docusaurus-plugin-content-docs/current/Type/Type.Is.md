---
title: Type.Is
---

# Type.Is


## Description

Določi, ali je vrednost prvega tipa vedno združljiva z drugo vrsto.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Določi, ali je vrednost <code>type1</code> vedno združljiva s <code>type2</code>.


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
