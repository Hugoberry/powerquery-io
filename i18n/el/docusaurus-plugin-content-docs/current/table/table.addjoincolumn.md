---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


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


## Remarks

Ενώνει τις γραμμές του `table1` με τις γραμμές του `table2` με βάση την ισότητα των τιμών των στηλών κλειδιού που επιλέγονται από το `key1` (για το `table1`) και το `key2` (για το `table2`). Τα αποτελέσματα καταχωρούνται στη στήλη με το όνομα `newColumnName`. Αυτή η συνάρτηση συμπεριφέρεται παρόμοια με την Table.Join με JoinKind ή LeftOuter με τη διαφορά ότι τα αποτελέσματα της ένωσης παρουσιάζονται σε ένθετη και όχι σε επίπεδη μορφή.


## Examples

### Example #1
Προσθέστε μια στήλη ένωσης στο (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) με το όνομα "price/stock" από τον πίνακα (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) με ένωση στο \[saleID\].
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
