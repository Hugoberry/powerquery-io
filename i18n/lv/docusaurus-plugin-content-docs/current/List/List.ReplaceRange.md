---
title: List.ReplaceRange
---

# List.ReplaceRange


## Description

Sākot no norādītās pozīcijas, norādītais skaits vērtību tiek aizstāts ar aizstājējvērtībām.


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

Sākot no norādītās pozīcijas <code>index</code>, <code>count</code> saraksta <code>list</code> vērtības tiek aizstātas ar sarakstu <code>replaceWith</code>.


## Examples

### Example #1 
Aizstājiet saraksta \{1, 2, 7, 8, 9, 5} daļu \{7, 8, 9} ar sarakstu \{3, 4}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
