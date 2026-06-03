---
title: Number.IsEven
---

# Number.IsEven


値が偶数かどうかを示します。


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

値が偶数かどうかを示します。値 `number` が偶数の場合は `true` を返し、それ以外の場合は `false` を返します。


## Examples

### Example #1
625 が偶数かどうかを調べます。
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
82 が偶数かどうかを調べます。
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
