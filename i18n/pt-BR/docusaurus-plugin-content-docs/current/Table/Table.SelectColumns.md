---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

Retorna uma tabela apenas com as colunas especificadas.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

Retorna o <code>table</code> apenas com o <code>columns</code> especificado.    <ul>       <li><code>table</code>: a tabela fornecida.</li>       <li><code>columns</code>:  a lista de colunas da tabela <code>table</code> a serem retornadas. As colunas na tabela retornada estão na ordem listada em <code>columns</code>.</li>       <li><code>missingField</code>: <i>(Opcional)</i> O que fazer se a coluna não existir.  Exemplo: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>.    </li></ul>


## Examples

### Example #1 
Inclui apenas a coluna [Name].
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
Inclui apenas as colunas [CustomerID] e [Name].
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
Se a coluna incluída não existir, o resultado padrão será um erro.
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
Se a coluna incluída não existir, a opção &lt;code&gt;MissingField.UseNull&lt;/code&gt; criará uma coluna de valores nulos.
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
