---
title: Table.SelectColumns
---

# Table.SelectColumns


Returnerar en tabell med bara de angivna kolumnerna.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Returnerar <code>table</code> med bara angivna <code>columns</code>.    <ul>       <li><code>table</code>: Den angivna tabellen.</li>       <li><code>columns</code>: Den lista med kolumner från tabellen <code>table</code> som ska returneras. Kolumnerna i den returnerade tabellen visas i ordningen som anges i <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Valfritt)</i> Vad som ska göras om kolumnen inte finns. Exempel: <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Inkludera bara kolumnen [Name].
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
Inkludera bara kolumnerna [CustomerID] och [Name].
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
Om den inkluderade kolumnen inte avslutas blir standardresultatet ett fel.
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
Om den inkluderade kolumnen inte avslutas skapar alternativet &lt;code&gt;MissingField.UseNull&lt;/code&gt; en kolumn med null-värden.
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
