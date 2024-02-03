---
title: List.Union
---

# List.Union


## Description

Vrátí sjednocení hodnot seznamu nalezených ve vstupu.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Přebírá seznam seznamů <code>lists</code>, sjednotí položky jednotlivých seznamů a vrátí je ve výstupním seznamu. Vrácený výsledný seznam obsahuje všechny položky ve všech vstupních seznamech.    Tato operace se řídí tradiční bag sémantikou, a duplicitní hodnoty jsou tedy porovnávány jako součást spojení.    K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice <code>equationCriteria</code>. 


## Examples

### Example #1 
Vytvoří sjednocení seznamu \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
