---
title: Table.SelectColumns
---

# Table.SelectColumns


Tiek atgriezta tabula tikai ar norādītajām kolonnām.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Tiek atgriezta `table` tikai ar norādīto `columns`.

-   `table`: Norādītā tabula.
-   `columns`: kolonnu saraksts no tabulas `table`, ko atgriezt. Kolonnas atgrieztajā tabulā ir secībā, kas norādīta `columns`.
-   `missingField`: *(Neobligāti)* Kā rīkoties, ja kolonna nepastāv. Piemērs: `MissingField.UseNull` vai `MissingField.Ignore`.


## Examples

### Example #1
Ietvert tikai kolonnu \[Name\].
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
Ietvert tikai kolonnas \[CustomerID\] un \[Name\].
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
Ja ietvertā kolonna nepastāv, pēc noklusējuma tiek atgriezta kļūda.
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
Ja ietvertā kolonna nepastāv, izmantojot opciju `MissingField.UseNull`, tiek izveidota kolonna ar vērtībām Null.
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
