---
title: Text.EndsWith
---

# Text.EndsWith


Υποδεικνύει αν το κείμενο τελειώνει στην καθορισμένη τιμή.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Υποδεικνύει εάν το παρεχόμενο κείμενο, `text`, τελειώνει με την καθορισμένη τιμή, `substring`. Η ένδειξη κάνει διάκριση πεζών-κεφαλαίων.

`comparer` είναι `Comparer` ο οποίος χρησιμοποιείται για τον έλεγχο της σύγκρισης. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.

Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων:

-   `Comparer.Ordinal`: Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης
-   `Comparer.OrdinalIgnoreCase`: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων
-   `Comparer.FromCulture`: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας


## Examples

### Example #1
Ελέγξτε αν το "Hello, World" τελειώνει σε "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Ελέγξτε αν το "Hello, World" τελειώνει σε "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
