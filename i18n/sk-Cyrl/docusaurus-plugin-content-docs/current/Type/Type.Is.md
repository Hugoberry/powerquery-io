---
title: Type.Is
---

# Type.Is


## Description

Určuje, či je hodnota prvého typu vždy kompatibilná s druhým typom.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Určuje, či je hodnota <code>type1</code> vždy kompatibilná s <code>type2</code>.


## Examples

### Example #1 
Určte, či sa hodnota typu number môže vždy považovať za typ any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Určte, či sa hodnota typu any môže vždy považovať za typ number.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
