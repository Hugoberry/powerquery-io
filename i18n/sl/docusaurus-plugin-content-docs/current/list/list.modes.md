---
title: List.Modes
---

# List.Modes


Vrne seznam najpogostejših vrednosti na seznamu.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrne elemente, ki so najpogosteje prikazani v `list`. Če je seznam prazen, pride do napake. Če je prikazanih več elementov z enako največjo frekvenco, so vrnjeni vsi. Določite lahko izbirno vrednost merila primerjanja `equationCriteria` za nadzor preskušanja enakosti.


## Examples

### Example #1
Poiščite elemente, ki so najpogosteje prikazani na seznamu `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
