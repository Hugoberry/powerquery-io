---
title: Number.RoundDown
---

# Number.RoundDown


## Description

返回上一个最大数。可以指定位数。


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

返回将 <code>number</code> 向下舍入到上一个最大整数的结果。如果 <code>number</code> 为 null，则此函数返回 null。    如果提供了 <code>digits</code>，则将 <code>number</code> 舍入为指定的小数位数。  


## Examples

### Example #1 
将 1.234 向下舍入到整数。
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
将 1.999 向下舍入到整数。
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
将 1.999 向下舍入为包含两位小数。
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
