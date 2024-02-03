---
title: Type.Is
---

# Type.Is


## Description

Određuje da li je vrednost prvog tipa uvek kompatibilna sa vrednošću drugog tipa.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Određuje da li je vrednost <code>type1</code> uvek kompatibilna sa vrednošću <code>type2</code>.


## Examples

### Example #1 
Odredite da li vrednost tipa broja može uvek tretirati i kao bilo koja vrednost.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Odredite da li se vrednost bilo kog tipa može uvek tretirati i kao tip broja.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
