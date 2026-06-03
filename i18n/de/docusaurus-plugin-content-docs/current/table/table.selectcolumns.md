---
title: Table.SelectColumns
---

# Table.SelectColumns


Gibt eine Tabelle zurück, die nur die angegebenen Spalten enthält.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Gibt die `table` nur mit der angegebenen `columns` zurück.

-   `table`: Die angegebene Tabelle.
-   `columns`: Die Liste der Spalten aus der Tabelle `table`, die zurückgegeben werden. Spalten in der zurückgegebenen Tabelle befinden sich in der Reihenfolge, die in `columns` aufgeführt ist.
-   `missingField`: *(Optional)* Vorgehensweise, wenn die Spalte nicht vorhanden ist. Beispiele: `MissingField.UseNull` oder `MissingField.Ignore`.


## Examples

### Example #1
Einschließen nur der Spalte "\[Name\]".
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
Einschließen nur der Spalten "\[CustomerID\]" und "\[Name\]".
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
Wenn die eingeschlossene Spalte nicht existiert, ist das Standardergebnis ein Fehler.
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
Wenn die eingeschlossene Spalte nicht vorhanden ist, erstellt die Option `MissingField.UseNull` eine Spalte mit NULL-Werten.
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
