---
title: List.Mode
---

# List.Mode


Returnează valoarea cea mai frecventă din listă.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Returnează elementul care apare cel mai frecvent în `list`. Dacă lista este goală, se generează o eroare. Dacă apar mai multe elemente cu aceeași frecvență maximă, se alege ultimul element. O valoare opțională a criteriilor de comparație, `equationCriteria`, poate fi specificată pentru a controla testarea egalității.


## Examples

### Example #1
Returnează elementul care apare cel mai frecvent în lista `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Găsiţi elementul care apare cel mai frecvent în lista `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
