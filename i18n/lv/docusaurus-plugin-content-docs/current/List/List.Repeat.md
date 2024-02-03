---
title: List.Repeat
---

# List.Repeat


## Description

Tiek atgriezts saraksts, kurā norādītās reizes ir atkārtoti ietverts sākotnējais saraksts.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Details

Tiek atgriezts saraksts, kurā <code>count</code> reizes ir atkārtoti ietverts sākotnējais saraksts <code>list</code>.


## Examples

### Example #1 
Izveidojiet sarakstu, kurā 3 reizes ir atkārtoti ietverts saraksts \{1, 2}.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
