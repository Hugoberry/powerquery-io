---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


傳回結果時，將正數捨入並將負數捨去。您可以可指定位數。


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

傳回結果時，依據數字的正負號將 `number` 四捨五入。此函數會將正數捨入並將負數捨去。 若指定 `digits`，`number` 會四捨五入成 `digits` 位小數位數。


## Examples

### Example #1
將數字 -1.2 背離零四捨五入。
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2
將數字 1.2 背離零四捨五入。
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3
將數字 -1.234 四捨五入成兩位小數位數。
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
