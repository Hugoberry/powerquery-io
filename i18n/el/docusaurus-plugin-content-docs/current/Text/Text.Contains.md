---
title: Text.Contains
---

# Text.Contains


## Description

Επιστρέφει αν το κείμενο περιέχει τη δευτερεύουσα συμβολοσειρά.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Εντοπίζει εάν <code>text</code> περιέχει την τιμή <code>substring</code>. Επιστρέφει την τιμή true εάν βρεθεί η τιμή. Αυτή η συνάρτηση δεν υποστηρίζει χαρακτήρες μπαλαντέρ ή κανονικές παραστάσεις.      <br />      <br />      Το προαιρετικό όρισμα <code>comparer</code> μπορεί να χρησιμοποιηθεί για τον καθορισμό συγκρίσεων με διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.      Οι ακόλουθες ενσωματωμένες συγκρίσεις είναι διαθέσιμες στη γλώσσα τύπων:      <ul>        <li><code>Comparer.Ordinal</code>: Χρησιμοποιείται για την εκτέλεση τακτικών συγκρίσεων με διάκριση πεζών-κεφαλαίων</li>        <li><code>Comparer.OrdinalIgnoreCase</code>:  Χρησιμοποιείται για την εκτέλεση τακτικών συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων</li>        <li><code>Comparer.FromCulture</code>: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας</li>      </ul>


## Examples

### Example #1 
Βρείτε αν το κείμενο &#34;Hello World&#34; περιέχει τη λέξη &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Βρείτε αν το κείμενο &#34;Hello World&#34; περιέχει τη λέξη &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Βρείτε αν το κείμενο &#34;Hello World&#34; περιέχει &#34;hello&#34;, χρησιμοποιώντας σύγκριση χωρίς διάκριση πεζών-κεφαλαίων.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
