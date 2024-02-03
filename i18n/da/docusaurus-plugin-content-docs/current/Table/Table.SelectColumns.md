---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Returnerer en tabel med kun de angivne kolonner.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Returnerer <code>table</code> med kun de angivne <code>columns</code>.    <ul>       <li><code>table</code>: Den angivne tabel.</li>       <li><code>columns</code>: Den liste over kolonner fra tabellen <code>table</code>, der skal returneres. Kolonner i den returnerede tabel er i den rækkefølge, der er vist i <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Valgfrit)</i> Hvad skal du gøre, hvis kolonnen ikke findes.  Eksempel:: <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Inkluder kun kolonnen [Navn].
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
Inkluder kun kolonnerne [Kunde-id] og [Navn].
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
Hvis den inkluderede kolonne ikke findes, er standardresultatet en fejl.
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
Hvis den inkluderede kolonne ikke findes, opretter indstillingen &lt;code&gt;MissingField.UseNull&lt;/code&gt; en kolonne med null-værdier.
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
