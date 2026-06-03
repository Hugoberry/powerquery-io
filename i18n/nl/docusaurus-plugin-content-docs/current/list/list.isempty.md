---
title: List.IsEmpty
---

# List.IsEmpty


Retourneert 'true' als de lijst leeg is.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Retourneert `true` als de lijst `list` geen waarden bevat (lengte 0). Als de lijst waarden bevat (lengte > 0), wordt `false` geretourneerd.


## Examples

### Example #1
Uitzoeken of de lijst \{\} leeg is.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Uitzoeken of de lijst \{1, 2\} leeg is.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
