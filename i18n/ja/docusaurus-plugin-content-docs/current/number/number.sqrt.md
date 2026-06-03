---
title: Number.Sqrt
---

# Number.Sqrt


数値の平方根を返します。


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

`number` の平方根を返します。 `number` が null の場合、`Number.Sqrt` は null を返します。負の値の場合は、`Number.NaN` を返します (数値ではありません)。


## Examples

### Example #1
625 の平方根を求めます。
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
85 の平方根を求めます。
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
