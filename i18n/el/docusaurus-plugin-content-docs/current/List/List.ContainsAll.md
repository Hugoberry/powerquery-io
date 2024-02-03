---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Υποδεικνύει αν μια λίστα περιλαμβάνει όλες τις τιμές μιας άλλης λίστας.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Υποδεικνύει αν η λίστα <code>list</code> περιλαμβάνει όλες τις τιμές μιας άλλης λίστας, <code>values</code>.    Επιστρέφει true εάν η τιμή βρέθηκε στη λίστα, διαφορετικά false. Μια προαιρετική τιμή κριτηρίων ισότητας, <code>equationCriteria</code>, μπορεί να καθοριστεί για τον έλεγχο ισότητας. 


## Examples

### Example #1 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 3 και το 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε αν η λίστα \{1, 2, 3, 4, 5} περιέχει το 5 και το 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
