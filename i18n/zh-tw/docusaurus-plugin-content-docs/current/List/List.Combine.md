---
title: List.Combine
---

# List.Combine


## Description

結合多個清單以傳回一個清單。


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

接受一連串清單 <code>lists</code>，將它們合併成一個新的清單。


## Examples

### Example #1 
合併兩個簡單清單 \{1, 2} 和 \{3, 4}。
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
合併兩個簡單清單 \{1, 2} 和 \{3, \{4, 5}}，其中一個包含巢狀清單。
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
