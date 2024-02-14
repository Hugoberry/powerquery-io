---
title: Table.ReorderColumns
---

# Table.ReorderColumns


Devolve uma tabela com as colunas pela ordem especificada.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Devolve uma tabela a partir da entrada <code>table</code>, com as colunas pela ordem especificada por <code>columnOrder</code>. As colunas que não forem especificadas na lista não serão reordenadas.     Se a coluna não existir, é emitida uma exceção a menos que o parâmetro opcional <code>missingField</code> especifique uma alternativa (por ex.: <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Alternar a ordem das colunas [Telefone] e [Nome] na tabela.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Alternar a ordem das colunas [Telefone] e [Endereço] ou utilizar &#34;MissingField.Ignore&#34; na tabela. Não altera a tabela por a coluna [Endereço] não existir.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
