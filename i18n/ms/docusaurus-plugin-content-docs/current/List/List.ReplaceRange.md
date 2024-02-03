---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Menggantikan nombor kiraan bagi nilai yang bermula di kedudukan dengan nilai gantian.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Details

Menggantikan nilai <code>count</code> dalam <code>list</code> dengan senarai <code>replaceWith</code>, yang bermula di kedudukan yang ditentukan, <code>index</code>.


## Examples

### Example #1 
Gantikan \{7, 8, 9} dalam senarai \{1, 2, 7, 8, 9, 5} dengan \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
