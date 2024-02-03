---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

Transforma los nombres de columna mediante la función especificada.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

Transforma los nombres de columna mediante la función de <code>nameGenerator</code> especificada. Opciones válidas:    <div> <code>MaxLength</code> especifica la longitud máxima de los nuevos nombres de columna. Si la función dada da como resultado un nombre de columna más largo, se recortará el nombre largo.     </div>    <div>      <code>Comparer</code> se usa para controlar la comparación al generar nuevos nombres de columna. Los comparadores se pueden usar para proporcionar comparaciones que no distinguen mayúsculas de minúsculas o referencias culturales y que reconocen la configuración regional.    </div>    <div>     Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:    </div>    <ul>      <li><code>Comparer.Ordinal</code>:  Se usa para realizar una comparación ordinal exacta</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: se usa para realizar una comparación exacta sin distinción entre mayúsculas y minúsculas</li>      <li><code>Comparer.FromCulture</code>: se usa para realizar una comparación compatible con la referencia cultural</li>    </ul>    


## Examples

### Example #1 
Quite el carácter &lt;code&gt;#(tab)&lt;/code&gt; de los nombres de columna
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
Transforma los nombres de columna para generar nombres que no distinguen mayúsculas de minúsculas con una longitud de 6 caracteres.
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
