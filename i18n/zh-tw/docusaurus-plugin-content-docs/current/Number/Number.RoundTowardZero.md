---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


## Description

傳回結果時，將正數捨去並將負數捨入。您可以指定位數。


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Details

傳回結果時，依據數字的正負號將 <code>number</code> 四捨五入。此函數會將正數捨去並將負數捨入。    若指定 <code>digits</code>，<code>number</code> 會四捨五入成 <code>digits</code> 位小數位數。  


## Examples

### Example #1 
將數字 -1.2 朝向零四捨五入。
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
將數字 1.2 朝向零四捨五入。
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
將數字 -1.234 捨入成兩位小數位數。
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
