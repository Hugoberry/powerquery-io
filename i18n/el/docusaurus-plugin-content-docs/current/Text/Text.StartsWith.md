---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Υποδεικνύει αν το κείμενο ξεκινά με την καθορισμένη τιμή.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Επιστρέφει true εάν η τιμή κειμένου <code>text</code> ξεκινά με την τιμή κειμένου <code>substring</code>. <ul> <li><code>text</code>: <i></i>A <code>text</code> η οποία θα αναζητηθεί</li>        <li><code>substring</code>: <i></i>A <code>text</code> τιμή που θα είναι η δευτερεύουσα συμβολοσειρά Έγινε αναζήτηση στο <code>substring</code></li> <li><code>comparer</code>: <i>[Optional]</i> A <code>Comparer</code> που χρησιμοποιείται για τον έλεγχο της σύγκρισης. Για παράδειγμα, <code>Comparer.OrdinalIgnoreCase</code> μπορεί να χρησιμοποιηθεί για την εκτέλεση αναζητήσεων χωρίς διάκριση πεζών-κεφαλαίων</li> </ul> <div><code>comparer</code> είναι ένας <code>Comparer</code> ο οποίος χρησιμοποιείται για τον έλεγχο της σύγκρισης. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων. </div> <div> Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων: </div> <ul> <li><code>Comparer.Ordinal</code>: Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης</li> <li><code>Comparer.OrdinalIgnoreCase</code>: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων</li> <li><code>Comparer.FromCulture</code>: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας</li></ul>


## Examples

### Example #1 
Ελέγξτε αν το κείμενο &#34;Hello, World&#34; ξεκινά με το κείμενο &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Ελέγξτε αν το κείμενο &#34;Hello, World&#34; ξεκινά με το κείμενο &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
