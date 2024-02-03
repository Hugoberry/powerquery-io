---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Επιστρέφει έναν πίνακα με μόνο τις καθορισμένες στήλες.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Επιστρέφει το <code>table</code> μόνο με το καθορισμένο <code>columns</code>.    <ul>       <li><code>table</code>: Ο παρεχόμενος πίνακας.</li>       <li><code>columns</code>: Η λίστα στηλών από τον πίνακα <code>table</code> να επιστραφεί. Οι στήλες στον πίνακα που επιστρέφεται είναι με τη σειρά που παρατίθενται στο <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Optional)</i> Τι πρέπει να κάνετε εάν η στήλη δεν υπάρχει.  Παράδειγμα: <code>MissingField.UseNull</code> ή <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Συμπερίληψη μόνο της στήλης [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2 
Συμπερίληψη μόνο των στηλών [CustomerID] και [Name].
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3 
Αν η στήλη που περιλαμβάνεται δεν υπάρχει, το προεπιλεγμένο αποτέλεσμα είναι σφάλμα.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4 
Αν η στήλη που περιλαμβάνεται δεν υπάρχει, η επιλογή &lt;code&gt;MissingField.UseNull&lt;/code&gt; δημιουργεί μια στήλη τιμών null.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
