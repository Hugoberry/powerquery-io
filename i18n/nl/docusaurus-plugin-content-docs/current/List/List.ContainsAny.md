---
title: List.ContainsAny
---

# List.ContainsAny


Geeft aan of een lijst een van de waarden in een andere lijst bevat.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of de lijst <code>list</code> een van de waarden in een andere lijst, <code>values</code> bevat.        Retourneert 'true' wanneer de waarde in de lijst wordt gevonden en 'false' als dit niet het geval is. Er kan een optionele waarde voor de vergelijkingsvoorwaarde, <code>equationCriteria</code>, voor het controleren van de gelijkheidstest worden opgegeven. 


## Examples

### Example #1 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 3 of 9 bevat.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 6 of 7 bevat.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
