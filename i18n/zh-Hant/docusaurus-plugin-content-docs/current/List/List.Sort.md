---
title: List.Sort
---

# List.Sort


根據指定的準則將資料清單排序。


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

根據指定的選擇性準則將資料清單 <code>list</code> 排序。    可指定選擇性參數 <code>comparisonCriteria</code> 做為比較準則。這個參數接受下列值:    <ul>    <li> 若要控制順序，比較準則可以是 Order 列舉值。(<code>Order.Descending</code>、<code>Order.Ascending</code>)。</li>    <li> 若要計算用於排序的索引鍵，可使用有 1 個引數的函數。</li>     <li> 若要同時選取索引鍵和控制順序，比較準則可以是包含索引鍵和順序的清單 (<code>\{each 1 / _, Order.Descending}</code>)。</li>    <li> 若要完全控制比較方式，可使用有 2 個引數的函數。您可以使用 Value.Compare 這個方法來委派這個邏輯。此函數將從清單中傳遞兩個項目 (任何兩個項目，以任何順序)。 該函數應返回下列其中一個值:        <ul>            <li> <code>-1</code>: 第一項小於第二項。</li>            <li> <code>0</code>: 兩個項目相等。</li>            <li> <code>1</code>: 第一項大於第二項。</li>        </ul>        Value.Compare 是一種可用於委派此邏輯的方法。 </li>    </ul>


## Examples

### Example #1 
將清單 \{2, 3, 1} 排序。
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
將清單 \{2, 3, 1} 依遞減順序排序。
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
使用 Value.Compare 方法將清單 \{2, 3, 1} 依遞減順序排序。
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
