---
title: List.Difference
---

# List.Difference


## Description

Returns the difference of the two given lists.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Returns the items in list <code>list1</code> that do not appear in list <code>list2</code>. Duplicate values are supported.    An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Find the items in list \{1, 2, 3, 4, 5} that do not appear in \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Find the items in the list \{1, 2} that do not appear in \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
