---
title: List.Last
---

# List.Last


## Description

Επιστρέφει την τελευταία τιμή της λίστας ή την καθορισμένη προεπιλογή εάν είναι κενή.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Επιστρέφει το τελευταίο στοιχείο της λίστας <code>list</code> ή την προαιρετική προεπιλεγμένη τιμή <code>defaultValue</code>, εάν η λίστα είναι κενή.    Εάν η λίστα είναι κενή και δεν έχει καθοριστεί προεπιλεγμένη τιμή, η συνάρτηση επιστρέφει την τιμή <code>null</code>.


## Examples

### Example #1 
Βρείτε την τελευταία τιμή της λίστας \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Βρείτε την τελευταία τιμή της λίστας \{} ή -1 εάν είναι κενή.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
