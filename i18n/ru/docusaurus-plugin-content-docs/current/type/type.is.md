---
title: Type.Is
---

# Type.Is


Определяет, является ли значение первого типа всегда совместимым со вторым типом.


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Remarks

Определяет, совместимо ли значение `type1` с `type2`. Параметр `type2` должен быть значением примитивного (или допускающего значение NULL примитива). В противном случае поведение этой функции не определено и на нее не следует повлиять.


## Examples

### Example #1
Определите, всегда ли можно рассматривать значение типа number как тип any.
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2
Определите, всегда ли значение типа any можно обрабатываться как число типа.
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
