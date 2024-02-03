---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Zwraca tabelę zawierającą tylko określone kolumny.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Zwraca tabelę <code>table</code> zawierającą tylko określone kolumny <code>columns</code>.    <ul>       <li><code>table</code>: Podana tabela.</li>       <li><code>columns</code>: Lista kolumn z tabeli <code>table</code>, które mają zostać zwrócone. Kolumny w zwracanej tabeli mają kolejność określoną w parametrze <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Opcjonalnie)</i> Co zrobić, jeśli kolumna nie istnieje.  Przykład: <code>MissingField.UseNull</code> lub <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Uwzględniaj tylko kolumnę [Name].
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
Uwzględniaj tylko kolumny [CustomerID] i [Name].
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
Jeśli dołączona kolumna nie zostanie zamknięta, opcja &lt;code&gt;MissingField.UseNull&lt;/code&gt; utworzy kolumnę wartości null.
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
