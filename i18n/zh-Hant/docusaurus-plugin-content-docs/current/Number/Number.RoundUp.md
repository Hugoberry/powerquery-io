---
title: Number.RoundUp
---

# Number.RoundUp


傳回下一個最大數字。您可以指定位數。


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

會四捨五入到 <code>number</code> 下一個最高整數。如果 <code>number</code> 為 Null，此函數會返回 Null。    如果提供 <code>digits</code>，則 <code>number</code> 會四捨五入到指定的小數位數。


## Examples

### Example #1 
將 1.234 向上四捨五入成整數。
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
將 1.999 向上四捨五入成整數。
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
將 1.234 捨入成兩位小數位數。
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
