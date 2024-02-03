---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Returns the one list item for a list of length one and the default value for an empty list.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

If there is only one item in the list <code>list</code>, returns that item.    If the list is empty, the function returns null unless an optional <code>default</code> is specified. If there is more than one item in the list, the function returns an error.


## Examples

### Example #1 
Find the single value in the list \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Find the single value in the list \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Find the single value in the list \{}. If is empty, return -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
