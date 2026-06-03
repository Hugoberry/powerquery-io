---
title: List.Sort
---

# List.Sort


指定された条件に従ってデータのリストを並べ替えます。


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

指定された省略可能な条件に従って、データのリスト `list` を並べ替えます。 省略可能なパラメーター `comparisonCriteria` は、比較条件として指定できます。次の値を受け取ることができます:

-   順序を制御するには、比較条件に Order 列挙型の値を指定できます。(`Order.Descending`、`Order.Ascending`)。
-   並べ替えに使用するキーを計算するには、1 つの引数の関数を使用できます。
-   キーを選択して、順序も制御するには、比較条件にキーと順序を含むリスト (`{each 1 / _, Order.Descending}`) を使用できます。
-   比較を完全に制御するには、2 つの引数の関数を使用できます (Value.Compare など)。この関数には、リストから 2 つの項目 (任意の順序で任意の 2 つの項目) が渡されます。この関数は、次のいずれかの値を返す必要があります:
    -   `-1`: 最初の項目が 2 番目の項目よりも小さい。
    -   `0`: 項目が等しい。
    -   `1`: 最初の項目が 2 番目の項目よりも大きい。


## Examples

### Example #1
リスト \{2, 3, 1\} を並べ替えます。
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
リスト \{2, 3, 1\} を降順に並べ替えます。
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Value.Compare メソッドを使用してリスト \{2, 3, 1\} を降順に並べ替えます。
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
