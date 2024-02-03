---
title: List.Distinct
---

# List.Distinct


## Description

Vrátí seznam hodnot s odebranými duplicitními hodnotami.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vrátí tabulku, která obsahuje všechny hodnoty v seznamu <code>list</code> s odebranými duplikáty. Pokud je seznam prázdný, výsledkem je prázdný seznam.


## Examples

### Example #1 
Odebere duplicitní hodnoty ze seznamu \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
