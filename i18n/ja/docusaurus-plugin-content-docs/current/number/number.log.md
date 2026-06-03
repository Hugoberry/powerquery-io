---
title: Number.Log
---

# Number.Log


指定された数値 (既定値は e) を底とする数値の対数を返します。


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

数値 `number` の、指定された `base` を底とする対数を返します。`base` を指定しなかった場合、既定値は Number.E です。 `number` が null の場合、`Number.Log` は null を返します。


## Examples

### Example #1
2 の 10 を底とする対数を取得します。
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
e を底とする 2 の対数を取得します。
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
