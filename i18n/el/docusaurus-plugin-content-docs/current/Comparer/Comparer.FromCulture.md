---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Επιστρέφει μια συνάρτηση σύγκρισης με βάση την καθορισμένη κουλτούρα και την ευαισθησία πεζών-κεφαλαίων.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί το <code>culture</code> και την ευαισθησία πεζών-κεφαλαίων που καθορίζεται από <code>ignoreCase</code> για την εκτέλεση συγκρίσεων..<br />      <br />      Μια συνάρτηση σύγκρισης δέχεται δύο ορίσματα και επιστρέφει -1, 0 ή 1 με βάση το αν η πρώτη τιμή είναι μικρότερη, ίση ή μεγαλύτερη από τη δεύτερη.<br />      <br />      Η προεπιλεγμένη τιμή για <code>ignoreCase</code> είναι false. Το <code>culture</code> θα πρέπει να είναι μία από τις τοπικές ρυθμίσεις που υποστηρίζονται από το πλαίσιο .NET (για παράδειγμα, "en-US").    


## Examples

### Example #1 
Συγκρίνετε το &#34;a&#34; και το &#34;A&#34; χρησιμοποιώντας τις τοπικές ρυθμίσεις &#34;en-US&#34; για να προσδιορίσετε αν οι τιμές είναι ίσες.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Συγκρίνετε το &#34;a&#34; και το &#34;A&#34; χρησιμοποιώντας τις τοπικές ρυθμίσεις &#34;en-US&#34;, παραβλέποντας τη διάκριση πεζών-κεφαλαίων για να προσδιορίσετε αν οι τιμές είναι ίσες.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
