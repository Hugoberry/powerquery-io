---
title: Type.Is
---

# Type.Is


Бірінші түр мәнінің екінші түрмен үнемі үйлесімді екенін анықтайды.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

`type1` мәні әрқашан `type2` үйлесімді екенін анықтайды. Параметр `type2` типтің қарапайым (немесе нөлдік) мәні болуы тиіс. Әйтпесе, бұл функцияның мінез-құлқы анықталмаған және оған сүйенбеу керек.


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
