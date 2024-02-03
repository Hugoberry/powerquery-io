---
title: List.PositionOf
---

# List.PositionOf


## Description

Επιστρέφει τις αποκλίσεις μιας τιμής σε μια λίστα.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Επιστρέφει την απόκλιση με την οποία εμφανίζεται η τιμή <code>value</code> στη λίστα <code>list</code>. Επιστρέφει -1 εάν η τιμή δεν εμφανίζεται.    Μπορεί να καθοριστεί μια προαιρετική παράμετρος εμφάνισης <code>occurrence</code>.<ul>   <li><code>occurrence</code>: Ο μέγιστος αριθμός εμφανίσεων για αναφορά.</li></ul>


## Examples

### Example #1 
Βρείτε τη θέση στη λίστα \{1, 2, 3} όπου εμφανίζεται η τιμή 3.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
