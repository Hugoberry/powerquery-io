---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

為長度 1 的清單傳回一個清單項目，並為空的清單傳回預設值。


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

如果清單 <code>list</code> 中只有一個項目，即傳回該項目。    如果清單是空的，則除非指定了選擇性的 <code>default</code>，否則函數會傳回 null。如果清單中不止一個項目，函數會傳回錯誤。


## Examples

### Example #1 
找出清單 \{1} 中的一個值。
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
找出清單 \{} 中的一個值。
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
找出清單 \{} 中的一個值。如果是空的，則傳回 -1。
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
