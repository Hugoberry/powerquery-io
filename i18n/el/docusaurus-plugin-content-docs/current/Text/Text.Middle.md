---
title: Text.Middle
---

# Text.Middle


## Description

Επιστρέφει τη δευτερεύουσα συμβολοσειρά μέχρι ένα συγκεκριμένο μήκος.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Details

Επιστρέφει <code>count</code> χαρακτήρες ή μέχρι το τέλος του στοιχείου <code>text</code>, στη μετατόπιση <code>start</code>.


## Examples

### Example #1 
Εντοπίζει τη δευτερεύουσα συμβολοσειρά του κειμένου &#34;Hello World&#34;, η οποία ξεκινά στη θέση ευρετηρίου 6 και επεκτείνεται για 5 χαρακτήρες.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
Εντοπίζει τη δευτερεύουσα συμβολοσειρά του κειμένου &#34;Hello World&#34;, η οποία ξεκινά στη θέση ευρετηρίου 6 μέχρι το τέλος της.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
