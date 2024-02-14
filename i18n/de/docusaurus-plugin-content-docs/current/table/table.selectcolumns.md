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

Gibt die <code>table</code> nur mit der angegebenen <code>columns</code> zurück.    <ul>       <li><code>table</code>: Die angegebene Tabelle.</li>       <li><code>columns</code>: Die Liste der Spalten aus der Tabelle <code>table</code>, die zurückgegeben werden. Spalten in der zurückgegebenen Tabelle befinden sich in der Reihenfolge, die in <code>columns</code> aufgeführt ist.</li>       <li><code>missingField</code>: <i>(Optional)</i> Vorgehensweise, wenn die Spalte nicht vorhanden ist.  Beispiele: <code>MissingField.UseNull</code> oder <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Einschließen nur der Spalte &#34;[Name]&#34;.
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
Einschließen nur der Spalten &#34;[CustomerID]&#34; und &#34;[Name]&#34;.
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
Wenn die eingeschlossene Spalte nicht vorhanden ist, erstellt die Option &lt;code&gt;MissingField.UseNull&lt;/code&gt; eine Spalte mit NULL-Werten.
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
