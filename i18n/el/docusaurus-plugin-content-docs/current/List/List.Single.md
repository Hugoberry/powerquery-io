---
title: List.Single
---

# List.Single


## Description

Επιστρέφει το στοιχείο λίστας ένα για μια λίστα μήκους ένα, διαφορετικά παρουσιάζει μια εξαίρεση.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Εάν υπάρχει μόνο ένα στοιχείο στη λίστα <code>list</code>, επιστρέφει αυτό το στοιχείο.    Εάν υπάρχουν περισσότερα από ένα στοιχεία στη λίστα ή η λίστα είναι κενή, η συνάρτηση επιστρέφει εξαίρεση.


## Examples

### Example #1 
Βρείτε τη μοναδική τιμή της λίστας \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Βρείτε τη μοναδική τιμή της λίστας \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
