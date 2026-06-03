---
title: Number.RoundUp
---

# Number.RoundUp


次に大きい数値を返します。桁数は指定できます。


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number` を次に大きい整数に丸めた結果を返します。`number` が null 値の場合、この関数は null 値を返します。 `digits` が指定された場合、`number` は小数点以下の指定の桁数に丸められます。


## Examples

### Example #1
1.234 を整数に切り上げます。
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
1.999 を整数に切り上げます。
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
1.234 を小数点以下が 2 桁になるように切り上げます。
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
