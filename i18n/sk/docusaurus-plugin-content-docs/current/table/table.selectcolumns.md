---
title: Table.SelectColumns
---

# Table.SelectColumns


Vráti tabuľku iba so zadanými stĺpcami.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Vráti tabuľku `table` iba so zadanými stĺpcami `columns`.

-   `table`: Poskytnutá tabuľka.
-   `columns`: Zoznam stĺpcov z tabuľky `table`, ktoré sa majú vrátiť. Stĺpce vo vrátenej tabuľke sú v poradí uvedenom v časti `columns`.
-   `missingField`: *(Voliteľné)* Čo robiť, ak stĺpec neexistuje. Príklad: `MissingField.UseNull` alebo `MissingField.Ignore`.


## Examples

### Example #1
Zahrňte iba stĺpec \[Name\].
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
Zahrňte iba stĺpce \[CustomerID\] a \[Name\].
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
Ak zahrnutý stĺpec neexistuje, predvoleným výsledkom je chyba.
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
Ak zahrnutý stĺpec neexistuje, možnosť `MissingField.UseNull` vytvorí stĺpec s hodnotami null.
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
