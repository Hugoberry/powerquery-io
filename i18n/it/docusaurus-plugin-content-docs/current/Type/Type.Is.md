---
title: Type.Is
---

# Type.Is


## Description

Determina se un valore del primo tipo è sempre compatibile con il secondo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Determina se un valore di <code>type1</code> è sempre compatibile con <code>type2</code>.


## Examples

### Example #1 
Determinare se un valore di tipo number può essere considerato sempre come type any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Determinare se un valore di tipo any può essere considerato sempre come type number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
