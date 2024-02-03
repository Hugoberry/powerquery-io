---
title: Type.Is
---

# Type.Is


## Description

Určuje, zda je hodnota prvního typu vždy kompatibilní s druhým typem.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Určuje, zda je hodnota <code>type1</code> vždy kompatibilní s <code>type2</code>.


## Examples

### Example #1 
Určete, zda lze hodnotu typu number vždy považovat za hodnotu typu any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Určuje, zda hodnota typu any může být vždy také považována za typ number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
