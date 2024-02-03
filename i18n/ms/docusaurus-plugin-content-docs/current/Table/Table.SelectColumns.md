---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Mengembalikan jadual dengan lajur yang ditentukan sahaja.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Mengembalikan <code>table</code> dengan <code>columns</code> yang ditentukan sahaja.    <ul>       <li><code>table</code>: Jadual yang diberikan.</li>       <li><code>columns</code>: Senarai lajur daripada jadual <code>table</code> untuk dikembalikan. Lajur dalam jadual yang dikembalikan adalah dalam tertib yang disenaraikan dalam <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Pilihan)</i> Apa yang perlu dilakukan jika lajur tidak wujud.  Contoh: <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Hanya termasuk lajur [Name].
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
Hanya termasuk lajur [CustomerID] dan [Name].
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
Jika lajur yang disertakan tidak wujud, hasil lalai adalah ralat.
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
Jika lajur yang disertakan tidak wujud, opsyen &lt;code&gt;MissingField.UseNull&lt;/code&gt; mencipta lajur nilai nol.
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
