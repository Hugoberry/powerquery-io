---
title: Text.Range
---

# Text.Range


## Description

Επιστρέφει τη δευτερεύουσα συμβολοσειρά που βρέθηκε στην απόκλιση.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Επιστρέφει τη δευτερεύουσα συμβολοσειρά από το κείμενο <code>text</code> που βρέθηκε στην απόκλιση <code>offset</code>.    Μπορεί να συμπεριληφθεί μια προαιρετική παράμετρος, <code>count</code>, για τον καθορισμό του αριθμού των χαρακτήρων που θα επιστραφούν. Εμφανίζεται σφάλμα αν οι χαρακτήρες δεν επαρκούν.


## Examples

### Example #1 
Βρείτε τη δευτερεύουσα συμβολοσειρά από το κείμενο &#34;Hello World&#34; ξεκινώντας από το δείκτη 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Βρείτε τη δευτερεύουσα συμβολοσειρά από το κείμενο &#34;Hello World Hello&#34; ξεκινώντας από το δείκτη 6 και σε εύρος 5 χαρακτήρων.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
