---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Returnează un tabel numai cu coloanele specificate.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Returnează <code>table</code> numai cu <code>columns</code>specificat.    <ul>       <li><code>table</code>: Tabelul furnizat.</li>       <li><code>columns</code>: Lista de coloane din tabelul <code>table</code> de returnat. Coloanele din tabelul returnat sunt în ordinea listată în <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Opțional)</i> Ce să faceți dacă coloana nu există.  Example: <code>MissingField.UseNull</code> sau <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Includeți doar coloana [Name].
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
Includeți doar coloanele [CustomerID] și [Name].
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
Dacă coloana inclusă nu există, rezultatul implicit este o eroare.
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
Dacă coloana inclusă nu există, opțiunea &lt;code&gt;MissingField.UseNull&lt;/code&gt; creează o coloană cu valori nule.
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
