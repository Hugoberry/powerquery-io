---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Aplica o(s) renomeamento(s) no formato \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Realiza os renomeamentos indicados ás columnas da táboa <code>table</code>. Unha operación de substitución <code>renames</code> consta dunha lista de dous valores, o valor de nome de columna antigo e o valor de nome de columna novo, fornecidos nunha lista.    Se a columna non existe, xérase unha excepción a non ser que o parámetro opcional <code>missingField</code> especifique unha alternativa (por exemplo, <code>MissingField.UseNull</code> ou <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Substituír o nome de columna &#34;CustomerNum&#34; por &#34;CustomerID&#34; na táboa.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Substituír o nome de columna &#34;CustomerNum&#34; por &#34;CustomerID&#34; e &#34;PhoneNum&#34; por &#34;Phone&#34; na táboa.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Substituír o nome de columna &#34;NewCol&#34; por &#34;NewColumn&#34; na táboa e ignorar se a columna non existe.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
