---
title: Number.IsNaN
---

# Number.IsNaN


値が NaN (非数) かどうかを示します。


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

値が NaN (数字ではない) かどうかを示します。`number` が `Number.NaN` と等しい場合は `true` を返し、それ以外の場合は `false` を返します。


## Examples

### Example #1
0 の 0 による除算が NaN であるかどうかを調べます。
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
1 の 0 による除算が NaN であるかどうかを調べます。
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
