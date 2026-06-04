---
title: Table.RenameColumns
---

# Table.RenameColumns


Aplica o(s) renomeamento(s) no formato \{old, new\}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Realiza os renomeamentos indicados ás columnas da táboa `table`. Unha operación de substitución `renames` consta dunha lista de dous valores, o valor de nome de columna antigo e o valor de nome de columna novo, fornecidos nunha lista. Se a columna non existe, xérase un erro a non ser que o parámetro opcional `missingField` especifique unha alternativa (por exemplo, `MissingField.UseNull` ou `MissingField.Ignore`).


## Examples

### Example #1
Substituír o nome de columna "CustomerNum" por "CustomerID" na táboa.
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
Substituír o nome de columna "CustomerNum" por "CustomerID" e "PhoneNum" por "Phone" na táboa.
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
Substituír o nome de columna "NewCol" por "NewColumn" na táboa e ignorar se a columna non existe.
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
