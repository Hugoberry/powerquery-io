---
title: Number.Permutations
---

# Number.Permutations


返回排列数。


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Remarks

使用指定的排列大小 `permutationSize` 返回可从项数 `setSize` 生成的排列数。


## Examples

### Example #1
计算 3 个一组、从总共 5 项得到的排列数。
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
