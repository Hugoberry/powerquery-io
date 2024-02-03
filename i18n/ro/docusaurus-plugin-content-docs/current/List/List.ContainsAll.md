---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Indică dacă o listă include toate valorile în altă listă.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indică dacă lista <code>list</code> include toate valorile în altă listă, <code>values</code>.    Returnează true dacă valoarea este găsită în listă; în caz contrar, returnează false. O valoare opţională pentru criteriile ecuaţiei, <code>equationCriteria</code>, poate fi specificată pentru a controla testarea egalităţii. 


## Examples

### Example #1 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 3 şi 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 5 şi 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
