---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


Permite agregar una nueva columna con valores representativos obtenidos a partir de valores agrupados aproximados de la columna especificada en la tabla.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Remarks

Permite agregar una nueva columna <code>newColumnName</code> a <code>table</code> con valores representativos de <code>columnName</code>. Dichos valores se obtienen mediante coincidencias aproximadas de los valores de <code>columnName</code> para cada fila.    Se puede incluir un conjunto opcional de <code>options</code> para especificar cómo deben compararse las columnas de claves. Opciones disponibles:    <ul><li><code>Culture</code> : Permite agrupar registros seg&#250;n reglas espec&#237;ficas de una referencia cultural. Puede usarse cualquier nombre de referencia cultural v&#225;lido. Por ejemplo, la opci&#243;n de referencia cultural &quot;ja-JP&quot; agrupa registros seg&#250;n la referencia cultural de japon&#233;s. El valor predeterminado es &quot;&quot;, que se basa en la referencia cultural invariable de ingl&#233;s.</li><li><code>IgnoreCase</code> : Valor l&#243;gico (true o false) que permite la agrupaci&#243;n de claves sin distinci&#243;n de may&#250;sculas y min&#250;sculas. Por ejemplo, si es true, &quot;Uvas&quot; se agrupar&#225; con &quot;uvas&quot;. El valor predeterminado es true.</li><li><code>IgnoreSpace</code> : Valor l&#243;gico (true o false) que permite combinar elementos de texto para buscar grupos. Por ejemplo, si es true, &quot;Uv as&quot; se agrupar&#225; con &quot;Uvas&quot;. El valor predeterminado es true.</li><li><code>SimilarityColumnName</code> : Nombre de la columna que muestra la similitud entre un valor de entrada y el valor representativo de esa entrada. El valor predeterminado es null, en cuyo caso no se agregar&#225; una nueva columna para similitudes.</li><li><code>Threshold</code> : N&#250;mero comprendido entre 0,00 y 1,00 que especifica la puntuaci&#243;n de similitud en la que se agrupar&#225;n dos valores.    Por ejemplo, &quot;Uvas&quot; y &quot;Uas&quot; (sin la &quot;v&quot;) solo se agrupar&#225;n juntos si esta opci&#243;n estuviera establecida en menos de 0,90.     Un umbral de 1,00 solo permitir&#225; coincidencias exactas.    (tenga en cuenta que una &quot;coincidencia exacta&quot; aproximada podr&#237;a omitir diferencias, como el uso de may&#250;sculas y min&#250;sculas, el orden de las palabras y la puntuaci&#243;n).     El valor predeterminado es 0,80.</li><li><code>TransformationTable</code> : Tabla que permite agrupar registros en funci&#243;n de asignaciones de valores personalizadas. Debe contener las columnas &quot;Desde&quot; y &quot;Hasta&quot;. Por ejemplo, &quot;Uvas&quot; se agrupa con &quot;Pasas&quot; si se proporciona una tabla de transformaci&#243;n en la que la columna &quot;Desde&quot; contiene &quot;Uva&quot; y la columna &quot;Hasta&quot; contiene &quot;Pasas&quot;. Tenga en cuenta que la transformaci&#243;n se aplicar&#225; a todas las repeticiones del texto en la tabla de transformaci&#243;n. Con la tabla de transformaci&#243;n anterior, &quot;Las uvas son dulces&quot; tambi&#233;n se agrupar&#225; con &quot;Las pasas son dulces&quot;.</li></ul><br />    


## Examples

### Example #1 
Encuentre los valores representativos para la ubicación de los empleados.
```powerquery
Table.AddFuzzyClusterColumn(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
