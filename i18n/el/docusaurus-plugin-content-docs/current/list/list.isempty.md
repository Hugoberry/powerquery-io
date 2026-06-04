---
title: List.IsEmpty
---

# List.IsEmpty


Επιστρέφει την τιμή true εάν η λίστα είναι κενή.


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Remarks

Επιστρέφει την τιμή `true` εάν η λίστα, `list`, δεν περιέχει καμία τιμή (μήκος 0). Εάν η λίστα περιέχει τιμές (μήκος > 0), επιστρέφει την τιμή `false`.


## Examples

### Example #1
Βρείτε αν η λίστα \{\} είναι κενή.
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2
Βρείτε αν η λίστα \{1, 2\} είναι κενή.
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
