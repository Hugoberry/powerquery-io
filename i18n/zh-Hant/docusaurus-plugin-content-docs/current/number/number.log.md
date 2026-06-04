---
title: Number.Log
---

# Number.Log


傳回數字以指定之底數 (預設為 e) 為底的對數。


## Syntax

```powerquery
Number.Log(
    number as number,
    optional base as number
) as number
```


## Remarks

傳回以指定的 `base` 為底數時，數字 `number` 的對數。若未指定 `base`，預設值為 Number.E。 若 `number` 為 Null，`Number.Log` 會傳回 Null。


## Examples

### Example #1
取得 2 以 10 為底數的對數。
```powerquery
Number.Log(2, 10)
```

Result: 
```powerquery
0.3010299956639812
```


### Example #2
取得 2 以 e 為底數的對數。
```powerquery
Number.Log(2)
```

Result: 
```powerquery
0.69314718055994529
```




## Category
Number.Operations
