---
title: Number.RoundUp
---

# Number.RoundUp


## Description

返回下一个最大数。可以指定位数。


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

返回将 <code>number</code> 向上舍入到下一个最大整数的结果。如果 <code>number</code> 为 null，则此函数返回 null。    如果提供了 <code>digits</code>，则将 <code>number</code> 舍入为指定的小数位数。  


## Examples

### Example #1 
将 1.234 向上舍入到整数。
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
将 1.999 向上舍入到整数。
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
将 1.234 向上舍入为包含两位小数。
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
