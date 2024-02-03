---
title: List.Contains
---

# List.Contains


## Description

Indică dacă lista conţine valoarea.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Indică dacă lista <code>list</code> conține valoarea <code>value</code>.    Returnează true dacă valoarea este găsită în listă; în caz contrar, returnează false. O valoare opțională criteriu de ecuație, <code>equationCriteria</code>, poate fi specificată pentru a controla testarea egalității. 


## Examples

### Example #1 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Aflaţi dacă lista \{1, 2, 3, 4, 5} conţine 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
