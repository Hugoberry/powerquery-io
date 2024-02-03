---
title: Html.Table
---

# Html.Table


## Description

Επιστρέφει έναν πίνακα που περιέχει τα αποτελέσματα της εκτέλεσης των καθορισμένων επιλογέων CSS έναντι του παρεχόμενου HTML.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

Επιστρέφει έναν πίνακα που περιέχει τα αποτελέσματα της εκτέλεσης των καθορισμένων επιλογέων CSS στο παρεχόμενο <code>html</code>. Μια προαιρετική παράμετρος εγγραφής, <code>options</code>, μπορεί να παρασχεθεί για τον καθορισμό πρόσθετων ιδιοτήτων. Η εγγραφή μπορεί να περιέχει τα ακόλουθα πεδία:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
Επιστρέφει έναν πίνακα από ένα δείγμα τιμής κειμένου html.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
Εξάγει όλα τα στοιχεία href από ένα δείγμα τιμής κειμένου html.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Πρόσβαση σε δεδομένα
