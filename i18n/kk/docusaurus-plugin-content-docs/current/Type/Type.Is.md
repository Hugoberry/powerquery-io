---
title: Type.Is
---

# Type.Is


## Description

Бірінші түр мәнінің екінші түрмен үнемі үйлесімді екенін анықтайды.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

<code>type1</code> мәнінің әрқашан <code>type2</code> мәнімен сәйкес екенін анықтайды.


## Examples

### Example #1 
Саны түрінің мәнін әрдайым кез келген түр ретінде өңдеу керектігін анықтайды.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
Кез келген түр мәнін әрдайым түр саны ретінде өңдеу керектігін анықтайды.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
