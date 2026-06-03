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

Retourneert het laatste item in de opgegeven lijst of de optionele standaardwaarde als de lijst leeg is.

-   `list`: de lijst die moet worden onderzocht.
-   `defaultValue`: (optioneel) De standaardwaarde die moet worden geretourneerd als de lijst leeg is. Als de lijst leeg is en er geen standaardwaarde is opgegeven, retourneert de functie `null`.


## Examples

### Example #1
De laatste waarde in de lijst \{1, 2, 3\} zoeken.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
De laatste waarde in de lijst \{\} opzoeken of -1 als de lijst leeg is.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
