---
title: List.Buffer
---

# List.Buffer


## Description

缓冲列表。


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

在内存中缓冲列表 <code>list</code>。此调用的结果是一个稳定的列表。


## Examples

### Example #1 
创建列表 \{1..10} 的稳定副本。
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
