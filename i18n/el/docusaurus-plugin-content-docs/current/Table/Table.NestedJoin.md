---
title: Table.NestedJoin
---

# Table.NestedJoin


## Description

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


## Details

Συνδέει τις γραμμές του <code>table1</code> με τις γραμμές του <code>table2</code> με βάση την ισότητα των τιμών των στηλών κλειδιού που επιλέγονται από το <code>key1</code> (για το <code>table1</code>) και το <code>key2</code> (για το <code>table2</code>). Τα αποτελέσματα καταχωρούνται στη στήλη με το όνομα <code>newColumnName</code>.<br />Η προαιρετική τιμή <code>joinKind</code> καθορίζει το είδος συνδέσμου που πρέπει να εκτελεστεί. Από προεπιλογή, αν δεν καθοριστεί <code>joinKind</code>, εκτελείται αριστερός εξωτερικός σύνδεσμος.<br />Μπορεί να συμπεριληφθεί ένα προαιρετικό σύνολο <code>keyEqualityComparers</code> το οποίο θα καθορίζει τον τρόπο σύγκρισης των στηλών κλειδιού. Αυτή η δυνατότητα προορίζεται προς το παρόν μόνο για εσωτερική χρήση.<br />  


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
