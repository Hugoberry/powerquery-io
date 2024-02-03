---
title: List.Distinct
---

# List.Distinct


## Description

Vraća listu vrednosti iz koje su uklonjeni duplikati.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vraća listu koja sadrži sve vrednosti sa liste <code>list</code> iz koje su uklonjeni duplikati. Ako je lista prazna, rezultat je prazna lista.


## Examples

### Example #1 
Uklanjanje duplikata iz liste \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
