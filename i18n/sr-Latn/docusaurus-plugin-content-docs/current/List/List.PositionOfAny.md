---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Vraća prvi pomak vrednosti sa liste.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Vraća pomak sa liste <code>list</code> prvog pojavljivanja vrednosti na listi <code>values</code>. Vraća -1 ako se ne pronađe pojavljivanje.    Može se navesti opcionalni parametar pojavljivanja <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Maksimalan broj pojavljivanja koji se može vratiti.</li></ul>


## Examples

### Example #1 
Pronalaženje prvog položaja na listi \{1, 2, 3} na kome se pojavljuje vrednost 2 ili 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
