---
title: List.RemoveFirstN
---

# List.RemoveFirstN


リストの先頭から指定された数の要素をスキップした結果のリストを返します。


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

リスト `list` の最初の要素を削除したリストを返します。`list` が空のリストの場合は、空のリストが返されます。 この関数は、オプション パラメーター `countOrCondition` を受け取り、次に示すような複数の値の削除をサポートします。

-   数値を指定すると、最大でその数値分の項目が削除されます。
-   条件が指定されている場合、`list` の先頭で連続して一致する項目はすべて削除されます。
-   このパラメーターが null の場合、既定の動作が行われます。


## Examples

### Example #1
\{1, 2, 3, 4, 5\} から最初の 3 つの数を削除したリストを作成します。
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
\{5, 4, 2, 6, 1\} から、3 未満の数で始まるリストを作成します。
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
