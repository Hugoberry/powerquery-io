---
title: List.RemoveNulls
---

# List.RemoveNulls


## Description

No norādītā saraksta tiek noņemtas visas vērtības Null.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Details

No saraksta <code>list</code> tiek noņemti visi vērtības Null gadījumi. Ja sarakstā nav nevienas vērtības Null, tiek atgriezts sākotnējais saraksts.


## Examples

### Example #1 
Noņemiet no saraksta \{1, 2, 3, null, 4, 5, null, 6} vērtības Null.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
