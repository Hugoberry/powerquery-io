---
title: List.Buffer
---

# List.Buffer


Buffers a list.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

Buffers the list <code>list</code> in memory. The result of this call is a stable list.


## Examples

### Example #1 
Create a stable copy of the list \{1..10}.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
