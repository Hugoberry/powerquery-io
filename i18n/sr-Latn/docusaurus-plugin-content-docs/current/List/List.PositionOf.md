---
title: List.PositionOf
---

# List.PositionOf


## Description

Vraća pomak(e) vrednosti sa liste.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vraća pomak na kome se na listi <code>list</code> pojavljuje vrednost <code>value</code>. Vraća -1 ako se vrednost ne pojavljuje.    Može se navesti opcionalni parametar pojavljivanja <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maksimalan broj pojavljivanja koji treba prijaviti.</li></ul>


## Examples

### Example #1 
Pronalaženje položaja na listi \{1, 2, 3} na kome se pojavljuje vrednost 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
