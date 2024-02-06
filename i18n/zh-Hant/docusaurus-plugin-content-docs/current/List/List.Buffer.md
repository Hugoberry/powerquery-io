---
title: List.Buffer
---

# List.Buffer


緩衝清單。


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

將清單 <code>list</code> 緩衝在記憶體中。這個呼叫的結果是穩定的清單。


## Examples

### Example #1 
建立清單 \{1..10} 的穩定複本。
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
