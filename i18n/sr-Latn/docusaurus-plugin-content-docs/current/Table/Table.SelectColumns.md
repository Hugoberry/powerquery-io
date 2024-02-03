---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Vraća tabelu koja sadrži samo navedene kolone.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Vraća <code>table</code> koji sadrži samo mavedene<code>columns</code>.    <ul>       <li><code>table</code>: Navedena tabela.</li>       <li><code>columns</code>: Lista kolona iz tabele <code>table</code> koja se vraća. Kolone iz vraćene tabele su u redosledu navedenom u <code>columns</code>.</li>       <li><code>missingField</code>: <i>(opcionalno)</i> Kako postupiti ako kolona ne postoji.  Primer: <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Uključite samo kolonu [Name].
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
Uključite samo kolone [CustomerID] i [Name].
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
Ako uključena kolona ne postoji, podrazumevani rezultat je greška.
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
Ako uključena kolona ne postoji, opcija &lt;code&gt;MissingField.UseNull&lt;/code&gt; kreira kolonu sa null vrednostima.
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
