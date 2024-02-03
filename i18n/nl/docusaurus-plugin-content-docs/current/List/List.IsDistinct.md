---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Geeft aan waar er dubbele waarden in de lijst staan.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Retourneert een logische waarde als er dubbele waarden in de lijst <code>list</code> staan; <code>true</code> als de lijst uniek is, <code>false</code> als er dubbele waarden in de lijst staan. 


## Examples

### Example #1 
Uitzoeken of de lijst \{1, 2, 3} uniek is (d.w.z. geen dubbele waarden).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de lijst \{1, 2, 3, 3} uniek is (d.w.z. geen dubbele waarden).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
