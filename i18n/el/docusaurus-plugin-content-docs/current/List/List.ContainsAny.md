---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Υποδεικνύει αν μια λίστα περιλαμβάνει οποιαδήποτε από τις τιμές μιας άλλης λίστας.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν η λίστα <code>list</code> περιλαμβάνει οποιαδήποτε από τις τιμές μιας άλλης λίστας, <code>values</code>.        Επιστρέφει true εάν βρέθηκε η τιμή στη λίστα, διαφορετικά false. Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 3 ή το 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 6 ή το 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
