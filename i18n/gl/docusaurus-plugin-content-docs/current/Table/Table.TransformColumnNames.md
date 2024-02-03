---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transforma os nomes das columnas mediante a función fornecida.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transforma os nomes das columnas mediante a función <code>nameGenerator</code> fornecida. Opcións válidas:    <div>      <code>MaxLength</code>: especifica a lonxitude máxima dos nomes de columna novos. Se a función fornecida é máis longa que o nome de columna, o nome recortarase.    </div>    <div>      <code>Comparer</code>: úsase para controlar a comparación ao mesmo tempo que se xeran nomes de columna novos. Os comparadores poden usarse para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.    </div>    <div>      Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:    </div>    <ul>      <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal exacta</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas</li>      <li> <code>Comparer.FromCulture</code>: úsase para realizar unha comparación de recoñecemento de referencias culturais</li>    </ul>    


## Examples

### Example #1 
Elimine o carácter &lt;code&gt;#(tab)&lt;/code&gt; dos nomes de columna
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
