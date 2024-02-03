---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Επιστρέφει την πρώτη απόκλιση μιας τιμής σε μια λίστα.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Επιστρέφει την απόκλιση στη λίστα <code>list</code> της πρώτης εμφάνισης μιας τιμής στη λίστα <code>values</code>. Επιστρέφει -1 εάν δεν βρεθεί καμία εμφάνιση.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος εμφάνισης <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Ο μέγιστος αριθμός εμφανίσεων που μπορεί να επιστραφεί.</li></ul>


## Examples

### Example #1 
Βρείτε την πρώτη θέση στη λίστα \{1, 2, 3} όπου εμφανίζεται η τιμή 2 ή η τιμή 3.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
