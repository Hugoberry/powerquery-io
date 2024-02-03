---
title: List.MinN
---

# List.MinN


## Description

リスト内の最小値を返します。返される値の数またはフィルター条件を指定できます。


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

リスト <code>list</code> 内の最小値を返します。    パラメーター <code>countOrCondition</code> は、返される値の数またはフィルター条件を指定します。省略可能なパラメーター <code>comparisonCriteria</code> は、リスト内の値を比較する方法を指定します。 <ul>        <li> <code>list</code>: 値のリスト。</li>        <li> <code>countOrCondition</code>: 数値を指定した場合、昇順で最大 <code>countOrCondition</code> 個の項目を含むリストが返されます。条件を指定した場合、初期状態でその条件を満たす項目のリストが返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。このパラメーターが null の場合、リスト内の単一の最小値が返されます。</li><li><code>comparisonCriteria</code>: <i>[省略可能]</i> 省略可能な <code>comparisonCriteria</code> 値を指定して、リスト内の項目を比較する方法を決定することができます。このパラメーターが null の場合、既定の比較関数が使用されます。 </li></ul>


## Examples

### Example #1 
リスト &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; 内の下位 5 つの値を求めます。
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
