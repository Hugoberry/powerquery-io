---
title: List.First
---

# List.First


## Description

Επιστρέφει την πρώτη τιμή της λίστας ή την καθορισμένη προεπιλογή εάν είναι κενή.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Επιστρέφει το πρώτο στοιχείο της λίστας <code>list</code> ή την προαιρετική προεπιλεγμένη τιμή <code>defaultValue</code>, εάν η λίστα είναι κενή.    Εάν η λίστα είναι κενή και δεν έχει καθοριστεί προεπιλεγμένη τιμή, η συνάρτηση επιστρέφει την τιμή <code>null</code>.


## Examples

### Example #1 
Βρείτε την πρώτη τιμή της λίστας \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Βρείτε την πρώτη τιμή της λίστας \{}. Εάν η λίστα είναι κενή, επιστρέφεται η τιμή -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
