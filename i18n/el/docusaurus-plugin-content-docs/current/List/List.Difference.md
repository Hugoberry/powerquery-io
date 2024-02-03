---
title: List.Difference
---

# List.Difference


## Description

Επιστρέφει τη διαφορά των δύο λιστών που δόθηκαν.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Επιστρέφει τα στοιχεία της λίστας <code>list1</code> που δεν εμφανίζονται στη λίστα <code>list2</code>. Υποστηρίζονται διπλότυπες τιμές.    Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε τα στοιχεία στη λίστα \{1, 2, 3, 4, 5} που δεν εμφανίζονται στο \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Βρείτε τα στοιχεία της λίστας \{1, 2} που δεν εμφανίζονται στη λίστα \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
