---
title: Table.SelectColumns
---

# Table.SelectColumns


Pateikiama lentelė tik su nurodytais stulpeliais.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Pateikiama `table` tik su nurodytais `columns`.

-   `table`: pateikta lentelė.
-   `columns`: pateiktinų `table` lentelės stulpelių sąrašas. Pateiktos lentelės stulpeliai išdėstyti tvarka, nurodyta `columns`.
-   `missingField`: *(pasirinktinai)* Ką daryti, jei stulpelio nėra. Pavyzdys: `MissingField.UseNull` arba `MissingField.Ignore`.


## Examples

### Example #1
Įtraukite tik stulpelį \[Pavadinimas\].
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
Įtraukite tik stulpelius \[KlientoID\] ir \[Pavadinimas\].
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
Jeigu įtrauktas stulpelis neegzistuoja, parinktis `MissingField.UseNull` sukuria „null“ reikšmių stulpelį.
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
