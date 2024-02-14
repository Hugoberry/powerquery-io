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

Определяет, является ли значение <code>type1</code> всегда совместимым с <code>type2</code>.


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
