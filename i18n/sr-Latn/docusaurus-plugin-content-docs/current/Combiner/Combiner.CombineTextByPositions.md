---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Vraća funkciju koja kombinuje listu teksta pomoću navedenih izlaznih pozicija.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Vraća funkciju koja kombinuje listu tekstualnih vrednosti u jednu tekstualnu vrednost pomoću navedenih izlaznih pozicija.


## Examples

### Example #1 
Kombinujte listu tekstualnih vrednosti tako što ćete ih postaviti u izlaz na navedene pozicije.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
