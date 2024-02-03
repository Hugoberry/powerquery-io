---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Υποδεικνύει αν το κείμενο τελειώνει στην καθορισμένη τιμή.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Υποδεικνύει εάν το παρεχόμενο κείμενο, <code>text</code>, τελειώνει με την καθορισμένη τιμή, <code>substring</code>. Η ένδειξη κάνει διάκριση πεζών-κεφαλαίων.      <div>        <code>comparer</code> είναι <code>Comparer</code> ο οποίος χρησιμοποιείται για τον έλεγχο της σύγκρισης. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.      </div>      <div>        Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων</li>         <li><code>Comparer.FromCulture</code>: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας</li>      </ul>


## Examples

### Example #1 
Ελέγξτε αν το &#34;Hello, World&#34; τελειώνει σε &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Ελέγξτε αν το &#34;Hello, World&#34; τελειώνει σε &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
