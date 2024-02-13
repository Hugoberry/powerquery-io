---
title: List.ContainsAll
---

# List.ContainsAll


Indicates where a list includes all the values in another list.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indicates whether the list <code>list</code> includes all the values in another list, <code>values</code>.    Returns true if value is found in the list, false otherwise. An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Find out if the list \{1, 2, 3, 4, 5} contains 3 and 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Find out if the list \{1, 2, 3, 4, 5} contains 5 and 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
