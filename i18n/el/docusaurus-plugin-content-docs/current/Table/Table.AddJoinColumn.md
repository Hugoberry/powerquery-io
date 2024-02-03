---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

Πραγματοποιεί μια ένωση μεταξύ πινάκων στις παρεχόμενες στήλες και παράγει το αποτέλεσμα της ένωσης σε μια νέα στήλη.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Details

Ενώνει τις γραμμές του <code>table1</code> με τις γραμμές του <code>table2</code> με βάση την ισότητα των τιμών των στηλών κλειδιού που επιλέγονται από το <code>key1</code> (για το <code>table1</code>) και το <code>key2</code> (για το <code>table2</code>). Τα αποτελέσματα καταχωρούνται στη στήλη με το όνομα <code>newColumnName</code>.Αυτή η συνάρτηση συμπεριφέρεται παρόμοια με την Table.Join με JoinKind ή LeftOuter με τη διαφορά ότι τα αποτελέσματα της ένωσης παρουσιάζονται σε ένθετη και όχι σε επίπεδη μορφή.


## Examples

### Example #1 
Προσθέστε μια στήλη ένωσης στο (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) με το όνομα &#34;price/stock&#34; από τον πίνακα (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) με ένωση στο [saleID].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
