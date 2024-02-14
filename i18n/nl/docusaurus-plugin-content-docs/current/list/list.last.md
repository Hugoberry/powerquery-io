---
title: List.Last
---

# List.Last


Retourneert de laatste waarde van de lijst of de opgegeven standaardwaarde als de lijst leeg is.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retourneert het laatste item uit de lijst <code>list</code> of de optionele standaardwaarde <code>defaultValue</code> als de lijst leeg is.    Als de lijst leeg is en er is geen standaardwaarde opgegeven, wordt <code>null</code> door de functie geretourneerd.


## Examples

### Example #1 
De laatste waarde in de lijst \{1, 2, 3} zoeken.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
De laatste waarde in de lijst \{} opzoeken of -1 als de lijst leeg is.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
