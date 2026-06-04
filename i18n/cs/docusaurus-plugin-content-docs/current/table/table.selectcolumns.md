---
title: Table.SelectColumns
---

# Table.SelectColumns


Vrátí tabulku pouze se zadanými sloupci.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Vrátí tabulku `table` pouze se zadanými sloupci `columns`.

-   `table`: Zadaná tabulka
-   `columns`: Seznam sloupců z tabulky `table`, které mají být vráceny. Sloupce ve vrácené tabulce mají pořadí uvedené v seznamu `columns`.
-   `missingField`: *(Volitelné)* Postup v případě, že sloupec neexistuje. Příklad: `MissingField.UseNull` nebo `MissingField.Ignore`.


## Examples

### Example #1
Zahrne jenom sloupec \[Jméno\].
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
Zahrne jenom sloupce \[IDZákazníka\] a \[Jméno\].
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
Pokud zahrnutý sloupec neexistuje, možnost `MissingField.UseNull` vytvoří sloupec hodnot null.
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
