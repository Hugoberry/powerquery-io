---
title: List.Modes
---

# List.Modes


## Description

Returns a list of the most frequent values in the list.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Returns the item that appears most frequently in the list, <code>list</code>. If the list is empty an exception is thrown. If multiple items appear with the same maximum frequency, the last one is chosen.    An optional <code>comparisonCriteria</code> value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Find the items that appears most frequently in the list &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
