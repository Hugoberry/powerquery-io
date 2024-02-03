---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Palauttaa taulukon, joka sisältää ainoastaan määritetyt sarakkeet.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Palauttaa <code>table</code>:n, jolla on vain määritetty <code>columns</code>.    <ul>       <li><code>table</code>: Annettu taulukko.</li>       <li><code>columns</code>: Palautettava sarakkeiden luettelo taulukosta <code>table</code>. Palautetun taulukon sarakkeet ovat lueteltu kohdassa <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Valinnainen)</i> Mitä tehdä, jos saraketta ei ole olemassa.  Esimerkki: <code>MissingField.UseNull</code> or <code>MissingField.Ignore</code>.     </li></ul>


## Examples

### Example #1 
Sisällytä vain sarake [Name].
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
Sisällytä vain sarakkeet [CustomerID] ja [Name].
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
Jos sisällytettyä saraketta ei ole, oletustulos on virhe.
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
Jos sisällytettyä saraketta ei ole, asetus &lt;code&gt;MissingField.UseNull&lt;/code&gt; luo tyhjäarvoja sisältävän sarakkeen.
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
