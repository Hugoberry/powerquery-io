---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Vrne tabelo z le navedenimi stolpci.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Vrne tabelo <code>table</code>, ki vsebuje le navedene stolpce <code>columns</code>.    <ul>       <li><code>table</code>: podana tabela.</li>       <li><code>columns</code>: seznam stolpcev iz tabele <code>table</code>, ki bo vrnjena. Stolpci v vrnjeni tabeli so v vrstnem redu, ki je naveden v <code>columns</code>.</li>       <li><code>missingField</code>: <i>(izbirno)</i> Kaj narediti, če stolpec ne obstaja? Primer: <code>MissingField.UseNull</code> ali <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Vključite samo stolpec [Ime].
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
Vključite samo stolpca [IDStranke] in [Ime].
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
Če vključeni stolpec ne obstaja, je privzeti rezultat napaka.
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
Če vključeni stolpec ne obstaja, možnost &lt;code&gt;MissingField.UseNull&lt;/code&gt; ustvari stolpec z ničelnimi vrednostmi.
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
