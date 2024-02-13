---
title: List.Skip
---

# List.Skip


リストの先頭から指定された数の要素をスキップした結果のリストを返します。


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

リスト <code>list</code> の最初の要素をスキップした結果のリストを返します。<code>list</code> が空のリストの場合は、空のリストが返されます。この関数は、省略可能なパラメーター <code>countOrCondition</code> を受け取って、次のように複数の値のスキップをサポートします。 <ul> <li>数値を指定した場合、その数までの項目がスキップされます。</li> <li>条件を指定した場合、返されるリストは、条件を満たす <code>list</code> 内の最初の要素で始まります。条件を満たさない項目があると、それ以降の項目は考慮されません。</li> <li>このパラメーターが null の場合は、既定の動作が見られます。</li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} から最初の 3 つの数を削除したリストを作成します。
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
\{5, 4, 2, 6, 1} から、3 未満の数で始まるリストを作成します。
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
