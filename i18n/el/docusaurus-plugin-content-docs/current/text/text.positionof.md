---
title: Text.PositionOf
---

# Text.PositionOf


Επιστρέφει την πρώτη θέση της τιμής (-1 εάν δεν βρεθεί).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Επιστρέφει τη θέση της καθορισμένης εμφάνισης της τιμής κειμένου `substring` που βρέθηκε στο `text`. Μπορεί να χρησιμοποιηθεί μια προαιρετική παράμετρος `occurrence` για τον καθορισμό της θέσης εμφάνισης που θα επιστραφεί (πρώτη εμφάνιση από προεπιλογή). Επιστρέφει -1 εάν δεν βρέθηκε `substring`.

`comparer` είναι `Comparer` που χρησιμοποιείται για τον έλεγχο της σύγκρισης. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.

Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων:

-   `Comparer.Ordinal`: Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης
-   `Comparer.OrdinalIgnoreCase`: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων
-   `Comparer.FromCulture`: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας


## Examples

### Example #1
Λάβετε τη θέση της πρώτης εμφάνισης του "World" στο κείμενο "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Get the position of the last occurrence of "World" in "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
