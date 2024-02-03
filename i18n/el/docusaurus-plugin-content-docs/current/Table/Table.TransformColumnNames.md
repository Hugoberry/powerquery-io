---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Μετασχηματίζει τα ονόματα στηλών χρησιμοποιώντας τη δεδομένη συνάρτηση.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Μετασχηματίζει τα ονόματα των στηλών χρησιμοποιώντας τη δεδομένη συνάρτηση <code>nameGenerator</code>. Έγκυρες επιλογές:    <div>      <code>MaxLength</code> καθορίζει το μέγιστο μήκος νέων ονομάτων στηλών. Εάν η δεδομένη συνάρτηση έχει ως αποτέλεσμα μεγαλύτερο όνομα στήλης, το μεγάλο όνομα θα περικοπεί.    </div>    <div>       <code>Comparer</code> χρησιμοποιείται για τον έλεγχο της σύγκρισης κατά τη δημιουργία νέων ονομάτων στηλών. Οι συγκρίσεις μπορούν να χρησιμοποιηθούν για την παροχή συγκρίσεων χωρίς διάκριση πεζών-κεφαλαίων ή κουλτούρας και τοπικών ρυθμίσεων.    </div>    <div>      Τα παρακάτω ενσωματωμένα προγράμματα σύγκρισης είναι διαθέσιμα στη γλώσσα τύπων:    </div>    <ul>      <li><code>Comparer.Ordinal</code>:  Χρησιμοποιείται για την εκτέλεση ακριβούς τακτικού δείκτη σύγκρισης</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: Χρησιμοποιείται για την εκτέλεση μιας ακριβούς σύγκρισης χωρίς διάκριση πεζών-κεφαλαίων</li>      <li><code>Comparer.FromCulture</code>: Χρησιμοποιείται για την εκτέλεση σύγκρισης με επίγνωση κουλτούρας</li>    </ul>    


## Examples

### Example #1 
Καταργήστε το χαρακτήρα &lt;code&gt;#(tab)&lt;/code&gt; από τα ονόματα στηλών
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Μετασχηματίζει τα ονόματα στηλών για τη δημιουργία ονομάτων χωρίς διάκριση πεζών-κεφαλαίων με μήκος 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
