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

根據項目清單 <code>setSize</code>，傳回指定之組合大小 <code>combinationSize</code> 的唯一組合數目。<ul>    <li><code>setSize</code>: 清單中的項目數目。</li>    <li><code>combinationSize</code>: 每個組合中的項目數目。</li></ul>


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
