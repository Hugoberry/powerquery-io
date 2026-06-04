---
title: List.Median
---

# List.Median


Επιστρέφει τη διάμεση τιμή της λίστας.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Επιστρέφει το στοιχείο διαμέσου της λίστας `list`. Αυτή η συνάρτηση επιστρέφει `null`, αν η λίστα δεν περιέχει τιμές μη `null`. Αν υπάρχει άρτιος αριθμός στοιχείων, η συνάρτηση επιλέγει το μικρότερο από τα δύο στοιχεία διαμέσου, εκτός αν η λίστα αποτελείται εξ ολοκλήρου από τιμές datetime, διάρκειες, αριθμούς ή ώρες, οπότε επιστρέφει τον μέσο όρο των δύο στοιχείων.


## Examples

### Example #1
Βρείτε το διάμεσο στοιχείο της λίστας `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
