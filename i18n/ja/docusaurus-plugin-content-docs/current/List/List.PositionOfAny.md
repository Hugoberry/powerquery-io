---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

リスト内の値の最初のオフセットを返します。


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

リスト <code>values</code> 内の値の最初の出現、のリスト <code>list</code> でのオフセットを返します。1 つも出現しない場合は -1 を返します。    省略可能な出現パラメーター <code>occurrence</code> を指定できます。<ul>   <li><code>occurrence</code>: 返すことができる出現の最大数。</li></ul>


## Examples

### Example #1 
リスト \{1, 2, 3} 内で値 2 または 3 が出現する最初の位置を求めます。
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
