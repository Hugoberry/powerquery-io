---
title: Type.IsNullable
---

# Type.IsNullable


Vrací hodnotu true, pokud jde o typ, který může mít hodnotu null (může být nullable); jinak vrací hodnotu false.


## Syntax

```powerquery
Type.IsNullable(
    type as type
) as logical
```


## Remarks

Vrací hodnotu `true`, pokud jde o typ, který může mít hodnotu null (může být `nullable`); jinak vrací hodnotu `false`.


## Examples

### Example #1
Určí, jestli číslo (`number`) může mít hodnotu null (může být nullable).
```powerquery
Type.IsNullable(type number)
```

Result: 
```powerquery
false
```


### Example #2
Určí, jestli číslo, které může mít typ s hodnotou null (`type nullable number`), může mít hodnotu null (nullable).
```powerquery
Type.IsNullable(type nullable number)
```

Result: 
```powerquery
true
```




## Category
Type
