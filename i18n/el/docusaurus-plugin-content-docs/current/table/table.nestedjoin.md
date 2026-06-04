---
title: Table.NestedJoin
---

# Table.NestedJoin


Πραγματοποιεί μια ένωση μεταξύ πινάκων στις παρεχόμενες στήλες και παράγει το αποτέλεσμα της ένωσης σε μια νέα στήλη.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Συνδέει τις γραμμές του `table1` με τις γραμμές του `table2` με βάση την ισότητα των τιμών των στηλών κλειδιού που επιλέγονται από το `key1` (για το `table1`) και το `key2` (για το `table2`). Τα αποτελέσματα καταχωρούνται στη στήλη με το όνομα `newColumnName`.

Η προαιρετική τιμή `joinKind` καθορίζει το είδος συνδέσμου που πρέπει να εκτελεστεί. Από προεπιλογή, αν δεν καθοριστεί `joinKind`, εκτελείται αριστερός εξωτερικός σύνδεσμος.

Μπορεί να συμπεριληφθεί ένα προαιρετικό σύνολο `keyEqualityComparers` το οποίο θα καθορίζει τον τρόπο σύγκρισης των στηλών κλειδιού. Αυτή η δυνατότητα προορίζεται προς το παρόν μόνο για εσωτερική χρήση.


## Examples

### Example #1
Ενώστε δύο πίνακες χρησιμοποιώντας μια στήλη με ένα κλειδί.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
