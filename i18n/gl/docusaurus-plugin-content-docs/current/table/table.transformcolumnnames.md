---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transforma os nomes das columnas mediante a función fornecida.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transforma os nomes das columnas mediante a función `nameGenerator` fornecida. Opcións válidas:

`MaxLength`: especifica a lonxitude máxima dos nomes de columna novos. Se a función fornecida é máis longa que o nome de columna, o nome recortarase.

`Comparer`: úsase para controlar a comparación ao mesmo tempo que se xeran nomes de columna novos. Os comparadores poden usarse para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.

Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:

-   `Comparer.Ordinal`: úsase para realizar unha comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas
-   `Comparer.FromCulture`: úsase para realizar unha comparación de recoñecemento de referencias culturais


## Examples

### Example #1
Elimine o carácter `#(tab)` dos nomes de columna
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Transforma os nomes das columnas para xerar nomes que non diferencian maiúsculas de minúsculas de lonxitude 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
