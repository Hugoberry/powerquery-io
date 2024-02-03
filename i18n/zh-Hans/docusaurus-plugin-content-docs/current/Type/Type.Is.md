---
title: Type.Is
---

# Type.Is


## Description

确定第一个类型的值是否始终与第二个类型兼容。


## Syntax

```powerquery
Type.Is(
    type1 as type,
    type2 as type
) as logical
```


## Details

确定 <code>type1</code> 的值是否始终与 <code>type2</code> 兼容。


## Examples

### Example #1 
确定类型号的值是否始终可以视为任何类型。
```powerquery
Type.Is(type number, type any)
```

Result: 
```powerquery
true
```


### Example #2 
确定任何类型的值是否始终可以视为类型号。
```powerquery
Type.Is(type any, type number)
```

Result: 
```powerquery
false
```




## Category
Type
