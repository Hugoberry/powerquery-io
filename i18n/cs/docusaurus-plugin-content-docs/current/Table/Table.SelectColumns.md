---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Vrátí tabulku pouze se zadanými sloupci.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Vrátí tabulku <code>table</code> pouze se zadanými sloupci <code>columns</code>.    <ul>       <li><code>table</code>: Zadaná tabulka</li>       <li><code>columns</code>: Seznam sloupců z tabulky <code>table</code>, které mají být vráceny Sloupce ve vrácené tabulce mají pořadí uvedené v seznamu <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Volitelně)</i> Postup v případě, že sloupec neexistuje.  Příklad: <code>MissingField.UseNull</code> nebo <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Zahrne jenom sloupec [Jméno].
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
Zahrne jenom sloupce [IDZákazníka] a [Jméno].
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
Pokud zahrnutý sloupec neexistuje, je výchozím výsledkem chyba.
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
Pokud zahrnutý sloupec neexistuje, možnost &lt;code&gt;MissingField.UseNull&lt;/code&gt; vytvoří sloupec hodnot null.
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
