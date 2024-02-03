---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Indică dacă o listă include oricare dintre valori în altă listă.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Indică dacă lista <code>list</code> include oricare dintre valori în altă listă, <code>values</code>.        Returnează true dacă valoarea este găsită în listă; în caz contrar, returnează false. O valoare opţională pentru criteriile ecuaţiei, <code>equationCriteria</code>, poate fi specificată pentru a controla testarea egalităţii. 


## Examples

### Example #1 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 3 sau 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 6 sau 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
