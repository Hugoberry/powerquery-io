---
title: List.First
---

# List.First


Retourneert de eerste waarde van de lijst of de opgegeven standaardwaarde als de lijst leeg is.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retourneert het eerste item uit de lijst <code>list</code> of de optionele standaardwaarde <code>defaultValue</code> als de lijst leeg is.    Als de lijst leeg is en er geen standaardwaarde is opgegeven, wordt <code>null</code> door de functie geretourneerd.


## Examples

### Example #1 
De eerste waarde zoeken in de lijst \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
De eerste waarde zoeken in de lijst \{}. Als de lijst leeg is, wordt -1 geretourneerd.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
