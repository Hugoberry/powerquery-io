---
title: Number.Permutations
---

# Number.Permutations


## Description

傳回排列數。


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

依據指定的排列大小 <code>permutationSize</code>，傳回可從項目數 <code>setSize</code> 產生的排列數。


## Examples

### Example #1 
找出總共 5 個項目中 3 個一組的排列數。
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
