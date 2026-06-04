---
title: Type.IsNullable
---

# Type.IsNullable


Vraća vrednost „true“ ako je tip onaj koji može biti bez vrednosti. U suprotnom, vraća vrednost „false“.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Vraća vrednost `true` ako je tip `nullable`. U suprotnom, `false`.


## Examples

### Example #1
Odredite da li `number` može da bude bez vrednosti.
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Odredite da li `type nullable number` može da bude bez vrednosti.
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
