---
title: List.Distinct
---

# List.Distinct


## Description

Vrne seznam vrednosti, iz katerega so odstranjeni dvojniki.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vrne seznam, ki vsebuje vse vrednosti na seznamu <code>list</code>, iz katerega so odstranjeni dvojniki. Če je seznam prazen, je rezultat prazen seznam.


## Examples

### Example #1 
Odstranite dvojnike iz seznama \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
