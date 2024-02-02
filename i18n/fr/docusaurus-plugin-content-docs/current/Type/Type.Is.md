---
title: Type.Is
---

# Type.Is


## Description

Détermine si une valeur du premier type est toujours compatible avec le second type.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Détermine si une valeur de <code>type1</code> est toujours compatible avec <code>type2</code>.


## Examples

### Example #1 
Détermine si une valeur de type nombre peut toujours être traitée comme un des types.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Détermine si une valeur de type quelconque peut toujours être traitée comme un nombre de types.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
