---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Retorna una taula només amb les columnes especificades.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Retorna l'element <code>table</code> només amb les <code>columns</code> especificades.    <ul>       <li><code>table</code>: la taula proporcionada.</li>       <li><code>columns</code>: la llista de columnes de la taula <code>table</code> que s'han de retornar. Les columnes de la taula retornada estan en l'ordre que s'indica a <code>columns</code>.</li>       <li><code>missingField</code>: <i>(opcional)</i> Què fer si la columna no existeix.  Exemple: <code>MissingField.UseNull</code> o <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Inclou només la columna [Name].
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
Inclou només les columnes [CustomerID] i [Name].
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
Si la columna inclosa no existeix, el resultat per defecte és un error.
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
Si la columna inclosa no existeix, l&#39;opció &lt;code&gt;MissingField.UseNull&lt;/code&gt; crea una columna de valors nuls.
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
