---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Navodi da li lista obuhvata bilo koju vrednost iz druge liste.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Navodi da li lista <code>list</code> obuhvata bilo koju vrednost iz druge liste, <code>values</code>.        Vraća „true“ ako se vrednost nalazi na listi. U suprotnom vraća „false“. Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 3 ili 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Otkrivanje da li lista \{1, 2, 3, 4, 5} sadrži 6 ili 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
