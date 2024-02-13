---
title: List.Median
---

# List.Median


リストの中央値を返します。


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

リスト <code>list</code> の中央項目を返します。<code>null</code> 以外の値がリストに含まれていない場合、この関数は <code>null</code> を返します。    項目の数が偶数個の場合、2 つの中央項目のうち小さい方の値が選択されます。ただし、リストが日時、期間、数字、時刻だけで    構成されている場合は例外であり、その場合は 2 つの項目の平均を返します。


## Examples

### Example #1 
リスト &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; の中央を求めます。
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
