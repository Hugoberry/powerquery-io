---
title: Text.Middle
---

# Text.Middle


Επιστρέφει τη δευτερεύουσα συμβολοσειρά μέχρι ένα συγκεκριμένο μήκος.


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

Επιστρέφει `count` χαρακτήρες ή μέχρι το τέλος του στοιχείου `text`, στη μετατόπιση `start`.


## Examples

### Example #1
Εντοπίζει τη δευτερεύουσα συμβολοσειρά του κειμένου "Hello World", η οποία ξεκινά στη θέση ευρετηρίου 6 και επεκτείνεται για 5 χαρακτήρες.
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
Εντοπίζει τη δευτερεύουσα συμβολοσειρά του κειμένου "Hello World", η οποία ξεκινά στη θέση ευρετηρίου 6 μέχρι το τέλος της.
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
Find the substring from the text "Hello World" starting at index 0 spanning 2 characters.
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
