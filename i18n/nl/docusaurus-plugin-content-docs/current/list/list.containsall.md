---
title: List.ContainsAll
---

# List.ContainsAll


Geeft aan of een lijst alle waarden in een andere lijst bevat.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of de lijst <code>list</code> alle waarden in een andere lijst, <code>values</code> bevat.    Retourneert 'true' wanneer de waarde in de lijst wordt gevonden en 'false' als dit niet het geval is. Er kan een optionele waarde voor de vergelijkingsvoorwaarde, <code>equationCriteria</code>, voor het controleren van de gelijkheidstest worden opgegeven. 


## Examples

### Example #1 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 3 en 4 bevat.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 5 en 6 bevat.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
