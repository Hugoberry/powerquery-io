---
title: Text.Range
---

# Text.Range


Επιστρέφει τη δευτερεύουσα συμβολοσειρά που βρέθηκε στην απόκλιση.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Επιστρέφει τη δευτερεύουσα συμβολοσειρά από το κείμενο `text` που βρέθηκε στην απόκλιση `offset`. Μπορεί να συμπεριληφθεί μια προαιρετική παράμετρος, `count`, για τον καθορισμό του αριθμού των χαρακτήρων που θα επιστραφούν. Προκαλεί σφάλμα αν δεν υπάρχουν αρκετοί χαρακτήρες.


## Examples

### Example #1
Βρείτε τη δευτερεύουσα συμβολοσειρά από το κείμενο "Hello World" ξεκινώντας από το δείκτη 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Βρείτε τη δευτερεύουσα συμβολοσειρά από το κείμενο "Hello World Hello" ξεκινώντας από το δείκτη 6 και σε εύρος 5 χαρακτήρων.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
