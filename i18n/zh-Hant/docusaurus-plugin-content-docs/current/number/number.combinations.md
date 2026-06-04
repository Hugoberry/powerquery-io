---
title: Number.Combinations
---

# Number.Combinations


傳回唯一組合的數目。


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

根據項目清單 `setSize`，傳回指定之組合大小 `combinationSize` 的唯一組合數目。

-   `setSize`: 清單中的項目數目。
-   `combinationSize`: 每個組合中的項目數目。


## Examples

### Example #1
找出總共 5 個項目中 3 個一組的所有組合數。
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
