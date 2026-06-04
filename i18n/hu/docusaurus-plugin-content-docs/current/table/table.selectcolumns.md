---
title: Table.SelectColumns
---

# Table.SelectColumns


Táblát ad vissza, amely csak a megadott oszlopokat tartalmazza.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

A(z) `table` táblát adja vissza, amely csak a megadott `columns` oszlopot tartalmazza.

-   `table`: A megadott tábla.
-   `columns`: A visszaadandó `table` tábla oszloplistája. A visszaadott tábla oszlopai a(z) `columns` által megadott sorrendben szerepelnek.
-   `missingField`: *(Választható)* Ezt a műveletet kell végrehajtani, ha az oszlop nem létezik. Példa: `MissingField.UseNull` vagy `MissingField.Ignore`.


## Examples

### Example #1
Csak a \[Name\] oszlopot foglalja bele.
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
Csak a \[CustomerID\] és \[Name\] oszlopot foglalja bele.
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
Ha a belefoglalt oszlop nem létezik, az alapértelmezett eredmény egy hiba.
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
Ha a belefoglalt oszlop nem létezik, a `MissingField.UseNull` beállítás egy null értékekkel rendelkező oszlopot hoz létre.
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
