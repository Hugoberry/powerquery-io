---
title: Number.Power
---

# Number.Power


求數字的指定次方。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

傳回 `number` 的 `power` 次方結果。 如果 `number` 或 `power` 是 Null，`Number.Power` 會傳回 Null。

-   `number`: 底數。
-   `power`: 指數。


## Examples

### Example #1
找出值 5 的 3 次方 (5 的立方)。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
