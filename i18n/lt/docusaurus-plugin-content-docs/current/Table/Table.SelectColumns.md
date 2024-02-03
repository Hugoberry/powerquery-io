---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Pateikiama lentelė tik su nurodytais stulpeliais.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Pateikiama <code>table</code> tik su nurodytais <code>columns</code>.    <ul>       <li><code>table</code>: pateikta lentelė.</li>       <li><code>columns</code>: pateiktinos lentelės <code>table</code> stulpelių sąrašas. Pateiktos lentelės stulpeliai išdėstyti tvarka, nurodyta <code>columns</code>.</li>       <li><code>missingField</code>: <i>(pasirenkama)</i> ką daryti, jei stulpelio nėra.  Pavyzdys: <code>MissingField.UseNull</code> arba <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Įtraukite tik stulpelį [Pavadinimas].
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
Įtraukite tik stulpelius [KlientoID] ir [Pavadinimas].
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
Jeigu įtrauktas stulpelis neegzistuoja, numatytasis rezultatas yra klaida.
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
Jeigu įtrauktas stulpelis neegzistuoja, parinktis &lt;code&gt;MissingField.UseNull&lt;/code&gt; sukuria „null“ reikšmių stulpelį.
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
