---
title: Table.SelectColumns
---

# Table.SelectColumns


Devuelve una tabla solo con las columnas especificadas.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Devuelve la <code>table</code> solo con las <code>columns</code> especificadas.    <ul>       <li><code>table</code>: la tabla proporcionada.</li>       <li><code>columns</code>: la lista de columna de la tabla <code>table</code> que devolver. Las columnas de la tabla devuelta están en el orden indicado en <code>columns</code>.</li>       <li><code>missingField</code>: <i>(opcional)</i> qué hacer si la columna no existe.  Por ejemplo: <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Incluir solo la columna [Name].
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
Incluir solo las columnas [CustomerID] y [Name].
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
Si la columna incluida no existe, el resultado predeterminado será un error.
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
Si la columna incluida no existe, la opción &lt;code&gt;MissingField.UseNull&lt;/code&gt; crea una columna de valores NULL.
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
