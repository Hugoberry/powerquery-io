---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

リストの末尾から指定された数の要素を削除した結果のリストを返します。


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

リスト <code>list</code> の末尾から、最後の <code>countOrCondition</code> 個の要素を削除した結果のリストを返します。<code>list</code> 内の要素数が <code>countOrCondition</code> 未満の場合は、空のリストが返されます。 <ul> <li>数値を指定した場合、その数までの項目が削除されます。</li> <li>条件を指定した場合、返されるリストは、<code>list</code> 内で条件を満たす、下から数えて最初にある要素で終わります。条件を満たさない項目があると、それ以降の項目は考慮されません。</li> <li>このパラメーターが NULL の場合は、ただ 1 つのアイテムが削除されます。</li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} から末尾の 3 つの数を削除したリストを作成します。
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{5, 4, 2, 6, 4} から、3 未満の数で終わるリストを作成します。
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
