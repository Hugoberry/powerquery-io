---
title: Type.Is
---

# Type.Is


## Description

Determina se um valor do primeiro tipo é sempre compatível com o segundo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Determina se um valor de <code>type1</code> é sempre compatível com <code>type2</code>.


## Examples

### Example #1 
Determine se um valor do tipo number também pode ser tratado como tipo any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Determine se um valor do tipo any também pode ser tratado como número do tipo.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
