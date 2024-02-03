---
title: Number.Permutations
---

# Number.Permutations


## Description

順列の数を返します。


## Syntax

```powerquery
Number.Permutations(
    setSize as number,
    permutationSize as number
) as number
```


## Details

項目数 <code>setSize</code> と指定された順列のサイズ <code>permutationSize</code> から生成できる順列の数を返します。


## Examples

### Example #1 
合計 5 つの項目の中から 3 つをグループにした場合の順列の数を求めます。
```powerquery
Number.Permutations(5, 3)
```

Result: 
```powerquery
60
```




## Category
Number.Operations
