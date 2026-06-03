---
title: Table.SelectColumns
---

# Table.SelectColumns


Zwraca tabelę zawierającą tylko określone kolumny.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Zwraca tabelę `table` zawierającą tylko określone kolumny `columns`.

-   `table`: podana tabela.
-   `columns`: lista kolumn z tabeli `table`, która ma zostać zwrócona. Kolumny w zwracanej tabeli mają kolejność określoną w parametrze `columns`.
-   `missingField`*: (opcjonalnie)* Co zrobić, jeśli kolumna nie istnieje. Przykład: `MissingField.UseNull` lub `MissingField.Ignore`.


## Examples

### Example #1
Uwzględniaj tylko kolumnę \[Name\].
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
Uwzględniaj tylko kolumny \[CustomerID\] i \[Name\].
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
Jeśli uwzględniona kolumna nie istnieje, domyślnym wynikiem jest błąd.
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
Jeśli dołączona kolumna nie zostanie zamknięta, opcja `MissingField.UseNull` utworzy kolumnę wartości null.
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
