---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Vraća funkciju koja kombinuje listu teksta pomoću navedenih pozicija i dužina.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Vraća funkciju koja kombinuje listu tekstualnih vrednosti u jednu tekstualnu vrednost pomoću navedenih izlaznih pozicija i dužina. Dužina bez vrednosti ukazuje na to da treba uključiti celu tekstualnu vrednost.


## Examples

### Example #1 
Kombinujte listu tekstualnih vrednosti pomoću navedenih izlaznih pozicija i dužina.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
