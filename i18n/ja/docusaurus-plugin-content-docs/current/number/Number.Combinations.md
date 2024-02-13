---
title: Number.Combinations
---

# Number.Combinations


一意の組み合わせの数を返します。


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

項目のリスト (<code>setSize</code>) から、指定された組み合わせのサイズ (<code>combinationSize</code>) で構成できる、一意の組み合わせの数を返します。<ul>    <li><code>setSize</code>: リストに含まれる項目の数。</li>    <li><code>combinationSize</code>: 各組み合わせに含まれる項目の数。</li></ul>


## Examples

### Example #1 
合計で 5 つの項目があるときに構成できる 3 つの項目から成る組み合わせの数を求めます。
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
