---
title: List.Single
---

# List.Single


Επιστρέφει το ένα στοιχείο λίστας για μια λίστα μήκους ενός, διαφορετικά προκαλεί σφάλμα.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Αν υπάρχει μόνο ένα στοιχείο στη λίστα `list`, επιστρέφει αυτό το στοιχείο. Αν υπάρχουν περισσότερα από ένα στοιχεία ή η λίστα είναι κενή, η συνάρτηση προκαλεί σφάλμα.


## Examples

### Example #1
Βρείτε τη μοναδική τιμή της λίστας \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Βρείτε τη μοναδική τιμή της λίστας \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
