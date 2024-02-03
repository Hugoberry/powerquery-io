---
title: List.Reverse
---

# List.Reverse


## Description

Saraksta vērtības tiek apvērstas pretējā secībā.


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

Tiek atgriezts saraksts, kurā saraksta <code>list</code> vērtības ir apvērstas pretējā secībā.


## Examples

### Example #1 
Izveidojiet sarakstu no saraksta \{1..10}, apvēršot vērtības pretējā secībā.
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
