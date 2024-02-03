---
title: List.FirstN
---

# List.FirstN


## Description

返す項目の数または条件を指定して、リスト内の項目の最初のセットを返します。


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>数値を指定した場合、その数までの項目が返されます。</li>  <li>条件を指定した場合、先頭からその条件を満たすすべての項目が返されます。条件を満たさない項目があると、それ以降の項目は考慮されません。</li> </ul>


## Examples

### Example #1 
リスト \{3, 4, 5, -1, 7, 8, 2} 内の、0 を超える初期値を求めます。
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
