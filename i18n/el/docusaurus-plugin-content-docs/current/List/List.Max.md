---
title: List.Max
---

# List.Max


## Description

Επιστρέφει τη μέγιστη τιμή ή την προεπιλεγμένη τιμή εάν η λίστα είναι κενή.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Επιστρέφει το μέγιστο στοιχείο της λίστας <code>list</code> ή την προαιρετική προεπιλεγμένη τιμή <code>default</code>, εάν η λίστα είναι κενή.    Μπορεί να καθοριστεί μια προαιρετική τιμή comparisonCriteria, <code>comparisonCriteria</code>, για τον προσδιορισμό του τρόπου σύγκρισης των στοιχείων της λίστας. Εάν αυτή η παράμετρος είναι null, χρησιμοποιείται η προεπιλεγμένη συνάρτηση σύγκρισης.


## Examples

### Example #1 
Βρείτε τις μέγιστες τιμές στη λίστα \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Βρείτε τη μέγιστη τιμή της λίστας \{} ή να επιστραφεί -1 εάν είναι κενή. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
