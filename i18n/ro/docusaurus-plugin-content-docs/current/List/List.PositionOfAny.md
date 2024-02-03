---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Returnează primul decalaj al unei valori dintr-o listă.


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

Returnează decalajul din lista <code>list</code> al primei ocurențe a unei valori dintr-o listă <code>values</code>. Returnează -1 dacă nu se găsește nicio ocurență.    Poate fi specificat un parametru de ocurență opțional <code>occurrence</code>.<ul>   <li><code>occurrence</code>: numărul maxim de ocurențe care pot fi returnate.</li></ul>


## Examples

### Example #1 
Găsiţi prima poziţie din lista \{1, 2, 3} în care apare valoarea 2 sau 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
