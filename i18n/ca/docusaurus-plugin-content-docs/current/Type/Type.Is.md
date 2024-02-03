---
title: Type.Is
---

# Type.Is


## Description

Determina si un valor del primer tipus sempre és compatible amb el segon tipus.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Determina si un valor de <code>type1</code> és sempre compatible amb <code>type2</code>.


## Examples

### Example #1 
Determina si un valor de tipus nombre es pot tractar sempre com a tipus qualsevol.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Determina si un valor de qualsevol tipus es pot tractar sempre com a tipus nombre.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
