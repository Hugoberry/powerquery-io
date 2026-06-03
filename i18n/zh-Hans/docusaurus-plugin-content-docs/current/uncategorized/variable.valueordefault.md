---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


如果未定义该变量，则返回指定变量的值或默认值。


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

返回由当前计算环境定义的指定变量 `identifier` 的值。如果未定义变量，则返回可选的 `defaultValue` 值。



## Category
Values.Implementation
