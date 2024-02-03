---
title: Type.Is
---

# Type.Is


## Description

Określa, czy wartość pierwszego typu jest zawsze zgodna z drugim typem.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

Określa, czy wartość <code>type1</code> jest zawsze zgodna z <code>type2</code>.


## Examples

### Example #1 
Określ, czy wartość typu number może być zawsze traktowana jako typ any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Określ, czy wartość typu any może być zawsze traktowana jako liczba typu.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
