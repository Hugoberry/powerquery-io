---
title: List.Min
---

# List.Min


Επιστρέφει την ελάχιστη τιμή ή την προεπιλεγμένη τιμή εάν η λίστα είναι κενή.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Επιστρέφει το ελάχιστο στοιχείο της λίστας `list` ή την προαιρετική προεπιλεγμένη τιμή `default`, εάν η λίστα είναι κενή. Μπορεί να καθοριστεί μια προαιρετική τιμή comparisonCriteria, `comparisonCriteria`, για τον προσδιορισμό του τρόπου σύγκρισης των στοιχείων της λίστας. Εάν αυτή η παράμετρος είναι null, χρησιμοποιείται η προεπιλεγμένη συνάρτηση σύγκρισης.


## Examples

### Example #1
Βρείτε τις ελάχιστες τιμές στη λίστα \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Βρείτε την ελάχιστη τιμή της λίστας \{\} ή να επιστραφεί -1 εάν είναι κενή.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
