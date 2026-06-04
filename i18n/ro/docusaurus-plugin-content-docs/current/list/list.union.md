---
title: List.Union
---

# List.Union


Returnează uniunea valorilor din listă găsite în datele introduse.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Preia o listă de liste `lists`, îmbină elementele în liste individuale și le returnează în lista de ieșire. Ca rezultat, lista returnată conține toate elementele din toate listele de intrare. Această operațiune menține semantica tradițională cu dubluri, astfel că valorile duplicate sunt potrivite ca parte a uniunii. O valoare opțională criteriu de ecuație, `equationCriteria`, poate fi specificată pentru a controla testarea egalității.


## Examples

### Example #1
Creaţi o uniune a listei \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
