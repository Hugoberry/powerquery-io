---
title: List.PositionOf
---

# List.PositionOf


リスト内の値のオフセットを返します。


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

値 <code>list</code> がリスト <code>value</code> に出現するオフセットを返します。値が出現しない場合は -1 を返します。    省略可能な出現パラメーター <code>occurrence</code> を指定できます。<ul>   <li><code>occurrence</code>: 報告する出現の最大数。</li></ul> 


## Examples

### Example #1 
リスト \{1, 2, 3} 内で値 3 が出現する位置を求めます。
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
