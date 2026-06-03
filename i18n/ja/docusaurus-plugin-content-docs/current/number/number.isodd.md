---
title: Number.IsOdd
---

# Number.IsOdd


値が奇数かどうかを示します。


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

値が奇数かどうかを示します。`number` が奇数の場合は `true` を返し、それ以外の場合は `false` を返します。


## Examples

### Example #1
625 が奇数かどうかを調べます。
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
82 が奇数かどうかを調べます。
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
