---
title: Text.PositionOf
---

# Text.PositionOf


## Description

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


## Details

Επιστρέφει τη θέση της καθορισμένης εμφάνισης της τιμής κειμένου <code>substring</code> που βρέθηκε στο <code>text</code>.    Μπορεί να χρησιμοποιηθεί μια προαιρετική παράμετρος <code>occurrence</code> για τον καθορισμό της θέσης εμφάνισης που θα επιστραφεί (πρώτη εμφάνιση από προεπιλογή).    Επιστρέφει -1 εάν δεν βρέθηκε <code>substring</code>.      <div>        <code>comparer</code> είναι <code>Comparer</code> που χρησιμοποιείται για τον έλεγχο της σύγκρισης. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.      </div>      <div>        Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων:      </div>      <ul>        <li><code>Comparer.Ordinal</code>:  Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων</li>        <li><code>Comparer.FromCulture</code>: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας</li>      </ul>


## Examples

### Example #1 
Λάβετε τη θέση της πρώτης εμφάνισης του &#34;World&#34; στο κείμενο &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Λάβετε τη θέση της τελευταίας εμφάνισης του &#34;World&#34; στο κείμενο &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
