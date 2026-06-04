---
title: List.Last
---

# List.Last


Επιστρέφει την τελευταία τιμή της λίστας ή την καθορισμένη προεπιλογή εάν είναι κενή.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Επιστρέφει το τελευταίο στοιχείο στην καθορισμένη λίστα ή την προαιρετική προεπιλεγμένη τιμή, αν η λίστα είναι κενή.

-   `list`: Η λίστα προς εξέταση.
-   `defaultValue`: (Προαιρετικό) Η προεπιλεγμένη τιμή που θα επιστραφεί αν η λίστα είναι κενή. Αν η λίστα είναι κενή και δεν έχει καθοριστεί προεπιλεγμένη τιμή, η συνάρτηση επιστρέφει `null`.


## Examples

### Example #1
Βρείτε την τελευταία τιμή της λίστας \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Βρείτε την τελευταία τιμή της λίστας \{\} ή -1 εάν είναι κενή.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
