---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Υποδεικνύει αν υπάρχουν διπλότυπες τιμές στη λίστα.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Επιστρέφει μια λογική τιμή αν υπάρχουν διπλότυπες τιμές στη λίστα <code>list</code>, την τιμή <code>true</code> αν η λίστα είναι διακριτή και την τιμή <code>false</code> αν υπάρχουν διπλότυπες τιμές. 


## Examples

### Example #1 
Βρείτε αν η λίστα \{1, 2, 3} είναι διακριτή (δηλαδή δεν περιέχει διπλότυπες τιμές).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε αν η λίστα \{1, 2, 3, 3} είναι διακριτή (δηλαδή δεν περιέχει διπλότυπες τιμές).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
