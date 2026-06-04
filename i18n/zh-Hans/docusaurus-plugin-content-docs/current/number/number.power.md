---
title: Number.Power
---

# Number.Power


计算某个数的指定次幂。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

返回计算 `number` 的 `power` 次幂所得的结果。 如果 `number` 或 `power` 为 null，则 `Number.Power` 返回 null。

-   `number`: 底数。
-   `power`: 指数。


## Examples

### Example #1
计算 5 的 3 次幂(5 的立方)的值。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
