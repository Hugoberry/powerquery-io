---
title: List.Contains
---

# List.Contains


Geeft aan of de lijst de waarde bevat.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Hiermee wordt aangegeven of de lijst <code>list</code> de waarde <code>value</code> bevat. Retourneert true als er een waarde is gevonden in de lijst en anders false. Een optionele vergelijkingscriteriawaarde, <code>equationCriteria</code>, kan worden opgegeven voor het aansturen van gelijkheidstesten. 


## Examples

### Example #1 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 3 bevat.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de lijst \{1, 2, 3, 4, 5} 6 bevat.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
