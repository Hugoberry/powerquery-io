---
title: Type.Is
---

# Type.Is


## Description

Conclúe se un valor do primeiro tipo sempre é compatible co segundo tipo.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Conclúe se o valor <code>type1</code> é sempre compatible con <code>type2</code>.


## Examples

### Example #1 
Conclúe se un valor de número de tipo se pode tratar sempre coma un tipo calquera.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Conclúe se un valor de calquera tipo se pode tratar sempre como número de tipo.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
