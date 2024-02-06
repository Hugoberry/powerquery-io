---
title: Number.Combinations
---

# Number.Combinations


返回唯一组合的数目。


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

从项列表 <code>setSize</code> 返回具有指定组合大小 <code>combinationSize</code> 的唯一组合数目。<ul>    <li><code>setSize</code>: 列表中的项数。</li>    <li><code>combinationSize</code>: 每个组合中的项数。</li></ul>


## Examples

### Example #1 
当每个组合为 3 个一组时从总共 5 项中计算组合数。
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
