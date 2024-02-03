---
title: List.PositionOf
---

# List.PositionOf


## Description

Returnează decalajele unei valori dintr-o listă.


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

Returnează decalajul la care valoarea <code>value</code> apare în lista <code>list</code>. Returnează -1 dacă valoarea nu apare.    Poate fi specificat un parametru de ocurență opțional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: numărul maxim de ocurențe de raportat.</li></ul>


## Examples

### Example #1 
Găsiţi poziţia din lista \{1, 2, 3} în care apare valoarea 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
