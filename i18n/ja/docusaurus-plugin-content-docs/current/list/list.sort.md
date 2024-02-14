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

省略可能な指定された条件に従ってデータのリスト <code>list</code> を並べ替えます。    省略可能なパラメーター <code>comparisonCriteria</code> は、比較条件として指定できます。次の値を指定できます。    <ul>    <li> 順序を制御するには、比較条件に Order 列挙値を指定できます (<code>Order.Descending</code>、<code>Order.Ascending</code>)。</li>    <li> 並べ替えに使用するキーを計算するには、1 つの引数を指定した関数を使用できます。</li>    <li> キーを選択し、さらに順序を制御するには、比較条件にキーと順序を含むリスト (<code>\{each 1 / _, Order.Descending}</code>) を使用できます。</li>    <li> 完全に比較を制御するには、2 つの引数の関数を使用できます。この関数には、リストから 2 つのアイテム（任意の 2 つのアイテム、任意の順序）が渡されます。 この関数は、次のいずれかの値を返す必要があります:        <ul>            <li> <code>-1</code>: 最初のアイテムが 2 番目のアイテムよりも小さい。</li>            <li> <code>0</code>: アイテムは同じです。</li>            <li> <code>1</code>: 最初のアイテムが 2 番目のアイテムよりも大きいです。</li>        </ul>Value.Compare は、このロジックをデリゲートするために使用できるメソッドです。</li>    </ul>


## Examples

### Example #1 
リスト \{2, 3, 1} を並べ替えます。
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
リスト \{2, 3, 1} を降順に並べ替えます。
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Value.Compare メソッドを使用してリスト \{2, 3, 1} を降順に並べ替えます。
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
