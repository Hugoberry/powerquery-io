---
title: List.RemoveLastN
---

# List.RemoveLastN


リストの末尾から指定された数の要素を削除した結果のリストを返します。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

リスト`list` の末尾から `countOrCondition` 個の要素を削除したリストを返します。`list` が `countOrCondition` 個未満の要素しか含まれていない場合は、空のリストが返されます。

-   数値を指定すると、最大でその数値分の項目が削除されます。
-   条件が指定されている場合、`list` の末尾にある連続した一致する項目はすべて削除されます。
-   このパラメーターが null の場合、削除される項目は 1 つだけです。


## Examples

### Example #1
\{1, 2, 3, 4, 5\} から末尾の 3 つの数を削除したリストを作成します。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
\{5, 4, 2, 6, 4\} から、3 未満の数で終わるリストを作成します。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
