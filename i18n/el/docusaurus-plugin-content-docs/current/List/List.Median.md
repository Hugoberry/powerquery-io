---
title: List.Median
---

# List.Median


## Description

Επιστρέφει τη διάμεση τιμή της λίστας.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Επιστρέφει το στοιχείο διαμέσου της λίστας <code>list</code>. Αυτή η συνάρτηση επιστρέφει <code>null</code>, αν η λίστα δεν περιέχει τιμές μη <code>null</code>.    Αν υπάρχει άρτιος αριθμός στοιχείων, η συνάρτηση επιλέγει το μικρότερο από τα δύο στοιχεία διαμέσου, εκτός αν η λίστα αποτελείται    εξ ολοκλήρου από τιμές datetime, διάρκειες, αριθμούς ή ώρες, οπότε επιστρέφει τον μέσο όρο των δύο στοιχείων.


## Examples

### Example #1 
Βρείτε το διάμεσο στοιχείο της λίστας &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
