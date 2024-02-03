---
title: List.Buffer
---

# List.Buffer


## Description

Saraksts tiek ievietots buferī.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

Saraksts <code>list</code> tiek ievietots atmiņas buferī. Veicot šo izsaukumu, tiek iegūts nemainīgs saraksts.


## Examples

### Example #1 
Izveidojiet nemainīgu saraksta \{1..10} kopiju.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
