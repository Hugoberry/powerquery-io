---
title: Type.Is
---

# Type.Is


Určuje, zda je hodnota prvního typu vždy kompatibilní s druhým typem.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Určuje, zda je hodnota `type1` vždy kompatibilní s `type2`. Parametr `type2` by měl být primitivním (nebo primitivním) typem s možnou hodnotou null. V opačném případě není chování této funkce definováno a nemělo by se na ni spoléhat.


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
