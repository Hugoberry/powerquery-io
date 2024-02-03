---
title: List.Max
---

# List.Max


## Description

最大値または空のリストの既定値を返します。


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

リスト <code>list</code> 内の最大の項目を返します。リストが空の場合、省略可能な既定値 <code>default</code> を返します。    省略可能な comparisonCriteria 値 <code>comparisonCriteria</code> を指定して、リスト内の項目を比較する方法を決定することができます。このパラメーターが null の場合、既定の比較関数が使用されます。


## Examples

### Example #1 
リスト \{1, 4, 7, 3, -2, 5} 内の最大値を求めます。
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
リスト \{} 内の最大値を求めます。リストが空の場合、-1 を返します。
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
