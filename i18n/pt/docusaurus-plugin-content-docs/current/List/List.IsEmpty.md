---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Returns true if the list is empty.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Returns <code>true</code> if the list, <code>list</code>, contains no values (length 0). If the list contains values (length > 0), returns <code>false</code>.


## Examples

### Example #1 
Find if the list \{} is empty.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Find if the list \{1, 2} is empty.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
