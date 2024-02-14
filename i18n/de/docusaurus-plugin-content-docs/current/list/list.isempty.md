---
title: List.IsEmpty
---

# List.IsEmpty


Gibt &#34;true&#34; zurück, falls die Liste leer ist.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Gibt <code>true</code> zurück, falls die Liste "<code>list</code>" keine Werte enthält (also die Länge 0 besitzt). Enthält die Liste Werte (Länge > 0), wird <code>false</code> zurückgegeben.


## Examples

### Example #1 
Ermittelt, ob die Liste &#34;\{}&#34; leer ist.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Liste &#34;\{1, 2}&#34; leer ist.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
