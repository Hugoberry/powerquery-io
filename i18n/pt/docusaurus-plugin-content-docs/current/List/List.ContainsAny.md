---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indicates where a list includes any of the values in another list.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indicates whether the list <code>list</code> includes any of the values in another list, <code>values</code>.        Returns true if value is found in the list, false otherwise. An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Find out if the list \{1, 2, 3, 4, 5} contains 3 or 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Find out if the list \{1, 2, 3, 4, 5} contains 6 or 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
