---
title: List.MinN
---

# List.MinN


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


## Remarks

リスト `list` 内の最小値を返します。 パラメーター `countOrCondition` は、返される値の数またはフィルター条件を指定します。省略可能なパラメーター `comparisonCriteria` は、リスト内の値を比較する方法を指定します。

-   `list`: 値のリスト。
-   `countOrCondition`: 数値を指定した場合、昇順で最大 `countOrCondition` 個の項目を含むリストが返されます。条件を指定した場合、初期状態でその条件を満たす項目のリストが返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。このパラメーターが null の場合、リスト内の単一の最小値が返されます。
-   `comparisonCriteria`: *(オプション)* オプションの `comparisonCriteria` 値を指定して、リスト内の項目を比較する方法を決定できます。このパラメーターが null の場合、既定の比較関数が使用されます。


## Examples

### Example #1
リスト `{3, 4, 5, -1, 7, 8, 2}` 内の下位 5 つの値を求めます。
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
