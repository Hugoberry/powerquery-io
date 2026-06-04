---
title: List.LastN
---

# List.LastN


Επιστρέφει μια λίστα με το τελευταίο στοιχείο ή στοιχεία στην καθορισμένη λίστα. Μπορείτε να καθορίσετε προαιρετικά πόσες τιμές θα επιστραφούν ή μια κατάλληλη συνθήκη.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returns a list of the last item or items in the specified list.

-   `list`: The list to examine. If the list is empty, an empty list is returned.
-   `countOrCondition`: (Optional) Supports gathering multiple items or filtering items. Although this parameter is listed as optional, an error occurs if this value isn't provided or is `null`. This parameter can be specified in two ways:
    -   If a number is specified, up to that many items are returned.
    -   If a condition is specified, all items are returned that meet the condition, starting at the end of the list. Once an item fails the condition, no further items are considered.


## Examples

### Example #1
Βρείτε την τελευταία τιμή της λίστας \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Βρείτε τις τελευταίες τιμές της λίστας \{3, 4, 5, -1, 7, 8, 2\} που είναι μεγαλύτερες του 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
