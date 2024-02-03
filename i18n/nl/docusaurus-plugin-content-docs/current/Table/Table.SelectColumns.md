---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Retourneert een tabel met alleen de opgegeven kolommen.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Retourneert de <code>table</code> met alleen de opgegeven <code>columns</code>.    <ul>       <li><code>table</code>: De opgegeven tabel.</li>       <li><code>columns</code>: De lijst met kolommen die vanuit de tabel <code>table</code> moeten worden geretourneerd. De kolommen in de geretourneerde tabel staan in de volgorde die staat vermeld in <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Optioneel)</i> Wat moet er worden gedaan als de kolom niet bestaat.  Bijvoorbeeld: <code>MissingField.UseNull</code> of <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Als de kolom [Name] opnemen.
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
Alleen de kolommen [CustomerID] en [Name] opnemen.
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
Als de opgenomen kolom niet bestaat, is het standaardresultaat een fout.
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
Als de opgenomen kolom niet bestaat, wordt met de optie &lt;code&gt;MissingField.UseNull&lt;/code&gt; een kolom met null-waarden gemaakt.
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
