---
title: List.Sum
---

# List.Sum


## Description

リスト内の項目の合計を返します。


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

リスト <code>list</code> 内の NULL 以外の値の合計を返します。リストに NULL 以外の値がない場合、NULL を返します。


## Examples

### Example #1 
リスト &lt;code&gt;\{1, 2, 3}&lt;/code&gt; 内の数の合計を求めます。
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
