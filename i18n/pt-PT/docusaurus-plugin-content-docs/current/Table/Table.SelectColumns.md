---
title: Table.SelectColumns
---

# Table.SelectColumns


Devolve uma tabela apenas com as colunas especificadas.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Devolve <code>table</code> apenas com as <code>columns</code> especificadas.    <ul>       <li><code>table</code>: a tabela fornecida.</li>       <li>: <code>columns</code>a lista de colunas da tabela <code>table</code> a devolver. As colunas existentes na tabela devolvida encontram-se na ordem listada em <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Opcional)</i> O que fazer se a coluna não existir.  Exemplo: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Incluir apenas a coluna [Name].
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
Incluir apenas as colunas [CustomerID] e [Name].
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
Se a coluna incluída não existir, o resultado predefinição é um erro.
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
Se a coluna incluída não existir, a opção &lt;code&gt;MissingField.UseNull&lt;/code&gt; cria uma coluna de valores nulos.
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
