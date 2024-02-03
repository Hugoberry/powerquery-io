---
title: List.Difference
---

# List.Difference


## Description

傳回兩個指定清單的差異。


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

傳回清單 <code>list1</code> 中不存在於清單 <code>list2</code> 的項目。支援重複的值。    您可指定選擇性的方程式條件值 <code>equationCriteria</code>，以控制等號比較測試。 


## Examples

### Example #1 
找出清單 \{1, 2, 3, 4, 5} 中未出現在 \{4, 5, 3} 中的項目。
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
找出清單 \{1, 2} 中不在 \{1, 2, 3} 中的項目。
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
