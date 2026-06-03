---
title: List.LastN
---

# List.LastN


指定したリストの最後の項目または項目のリストを返します。必要に応じて、返される値の数または条件を指定できます。


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

指定したリストの最後の項目または項目のリストを返します。

-   `list`: 調べるリスト。リストが空の場合は空のリストが返されます。
-   `countOrCondition`: (オプション) 複数のアイテムの収集またはアイテムのフィルター処理をサポートします。このパラメーターはオプションとして一覧表示されますが、この値が指定されていない、または `null` の場合、エラーが発生します。このパラメーターは、次の 2 つの方法で指定できます:
    -   数値を指定した場合は、その数までの項目が返されます。
    -   条件を指定した場合は、リストの末尾から条件を満たすすべての項目が返されます。条件を満たさない項目が現れた時点で、それ以降の項目は考慮されません。


## Examples

### Example #1
リスト \{3, 4, 5, -1, 7, 8, 2\} 内の最後の値を求めます。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
リスト \{3, 4, 5, -1, 7, 8, 2\} 内の、0 を超える最後の値を求めます。
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
