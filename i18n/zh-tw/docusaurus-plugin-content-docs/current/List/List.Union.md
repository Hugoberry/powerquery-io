---
title: List.Union
---

# List.Union


## Description

傳回出現在輸入中的清單值聯集。


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

接受一連串的清單 <code>lists</code>，取得個別清單中項目的聯合，然後以輸出清單傳回。因此，傳回的清單中會包含任何輸入清單中的所有項目。    這項作業保持傳統 Bag 語意，所以聯合中會比對重複的值。    可指定選擇性的方程式條件值 <code>equationCriteria</code>，以控制等號比較測試。 


## Examples

### Example #1 
建立清單 \{1..5}、\{2..6}、\{3..7} 的聯集。
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
