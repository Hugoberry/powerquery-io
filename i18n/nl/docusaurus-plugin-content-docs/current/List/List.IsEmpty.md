---
title: List.IsEmpty
---

# List.IsEmpty


## Description

Retourneert &#39;true&#39; als de lijst leeg is.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

Retourneert <code>true</code> als de lijst <code>list</code> geen waarden bevat (lengte 0). Als de lijst waarden bevat (lengte > 0), wordt <code>false</code> geretourneerd.


## Examples

### Example #1 
Uitzoeken of de lijst \{} leeg is.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Uitzoeken of de lijst \{1, 2} leeg is.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
