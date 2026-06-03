---
title: Number.Power
---

# Number.Power


数値を指定された数値でべき乗します。


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

`number` を `power` でべき乗した結果を返します。 `number` または `power` が null の場合、`Number.Power` は null を返します。

-   `number`: 基数。
-   `power`: 指数。


## Examples

### Example #1
5 を 3 でべき乗した値 (5 の 3 乗) を求めます。
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
