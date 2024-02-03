---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

返回向上舍入正数和向下舍入负数的结果。可以指定位数。


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

基于数字的符号返回舍入 <code>number</code> 的结果。此函数将向上舍入正数、向下舍入负数。    如果指定了 <code>digits</code>，则将 <code>number</code> 舍入为包含 <code>digits</code> 位小数。  


## Examples

### Example #1 
向远离零的方向舍入数 -1.2。
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
向远离零的方向舍入数 1.2。
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
将数字 -1.234 向远离零的方向舍入为包含两位小数。
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
