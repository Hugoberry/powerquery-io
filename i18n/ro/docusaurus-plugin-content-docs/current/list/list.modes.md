---
title: List.Modes
---

# List.Modes


Returnează o listă cu cele mai frecvente valori din listă.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnează elementele care apar cel mai frecvent în `list`. Dacă lista este goală, se generează o eroare. Dacă apar mai multe elemente cu aceeași frecvență maximă, toate sunt returnate. O valoare opțională a criteriilor de comparație, `equationCriteria`, poate fi specificată pentru a controla testarea egalității.


## Examples

### Example #1
Găsiţi elementele care apar cel mai frecvent în lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
