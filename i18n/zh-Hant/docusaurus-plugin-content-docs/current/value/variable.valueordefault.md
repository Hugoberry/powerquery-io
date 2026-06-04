---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


傳回指定變數的值；如果變數未定義，則傳回預設值。


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

傳回目前評估環境所定義指定變數 `identifier` 的值。如果未定義變數，則傳回選用的 `defaultValue`。



## Category
Values.Implementation
