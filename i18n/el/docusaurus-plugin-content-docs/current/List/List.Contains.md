---
title: List.Contains
---

# List.Contains


## Description

Υποδεικνύει αν η λίστα περιέχει την τιμή.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν η λίστα <code>list</code> περιέχει την τιμή <code>value</code>.     Επιστρέφει true εάν η τιμή βρέθηκε στη λίστα, διαφορετικά false. Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
