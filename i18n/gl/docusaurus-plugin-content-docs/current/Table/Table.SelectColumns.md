---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Devolve unha táboa só coas columnas especificadas.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Devolve a <code>table</code> só coas <code>columns</code> especificadas.    <ul>       <li><code>table</code>: a táboa fornecida.</li>       <li><code>columns</code>: a lista de columnas da táboa <code>table</code> que se van devolver. As columnas na táboa devolta están na orde indicada en <code>columns</code>.</li>       <li><code>missingField</code>: <i>(opcional)</i> o que se vai facer se a columna non existe.  Exemplo: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Incluír só a columna [Name].
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
Incluír só as columnas [CustomerID] e [Name].
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
Se a columna incluída non existe, o resultado predefinido é un erro.
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
Se a columna incluída non existe, a opción &lt;code&gt;MissingField.UseNull&lt;/code&gt; crea unha columna de valores nulos.
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
