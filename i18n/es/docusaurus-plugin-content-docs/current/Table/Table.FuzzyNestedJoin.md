---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Realiza una combinación parcial de las tablas en las columnas proporcionadas y genera el resultado de la combinación en una nueva columna.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

Combina las filas de <code>table1</code> con las filas de <code>table2</code> según la coincidencia aproximada de los valores de las columnas de clave seleccionadas por <code>key1</code> (para <code>table1</code>) y <code>key2</code> (para <code>table2</code>). Los resultados se especifican en la columna denominada <code>newColumnName</code>.<br />La coincidencia aproximada es una comparación basada en la similitud del texto, en vez de en su igualdad.<br />El valor opcional <code>joinKind</code> especifica el tipo de unión que se debe realizar. De manera predeterminada, se efectuará una combinación externa izquierda en caso de no especificar <code>joinKind</code>. Entre las opciones incluidas están las siguientes:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Es posible incluir un conjunto opcional de <code>joinOptions</code> para especificar el modo de comparar las columnas clave. Entre las opciones incluidas están las siguientes:    <ul><li><code>ConcurrentRequests</code> : N&#250;mero comprendido entre 1 y 8 que especifica el n&#250;mero de subprocesos paralelos que se usar&#225;n para la coincidencia aproximada. El valor predeterminado es 1.</li><li><code>Culture</code> : Permite que los registros coincidentes se basen en reglas espec&#237;ficas de una referencia cultural. Puede usarse cualquier nombre de referencia cultural v&#225;lido. Por ejemplo, una opci&#243;n de referencia cultural de &quot;ja-JP&quot; coincidir&#225; con los registros basados en la referencia cultural de japon&#233;s. El valor predeterminado es &quot;&quot;, que se basa en la referencia cultural invariable de ingl&#233;s.</li><li><code>IgnoreCase</code> : Valor l&#243;gico (true o false) que permite la asociaci&#243;n de claves sin distinci&#243;n de may&#250;sculas y min&#250;sculas. Por ejemplo, si es true, &quot;Uvas&quot; se asociar&#225; a &quot;uvas&quot;. El valor predeterminado es true.</li><li><code>IgnoreSpace</code> : Valor l&#243;gico (true o false) que permite combinar elementos de texto para encontrar coincidencias. Por ejemplo, si es true, &quot;Uv as&quot; se asociar&#225; a &quot;Uvas&quot;. El valor predeterminado es true.</li><li><code>NumberOfMatches</code> : N&#250;mero entero que especifica el n&#250;mero m&#225;ximo de filas coincidentes que se pueden devolver para cada fila de entrada. Por ejemplo, un valor de 1 devolver&#225; como m&#225;ximo una fila coincidente para cada fila de entrada. Si no se proporciona esta opci&#243;n, se devolver&#225;n todas las filas coincidentes.</li><li><code>SimilarityColumnName</code> : Nombre de la columna que muestra la similitud entre un valor de entrada y el valor representativo de esa entrada. El valor predeterminado es null, en cuyo caso no se agregar&#225; una nueva columna para similitudes.</li><li><code>Threshold</code> : N&#250;mero comprendido entre 0,00 y 1,00 que especifica la puntuaci&#243;n de similitud en la que se asociar&#225;n dos valores.    Por ejemplo, &quot;Uvas&quot; y &quot;Uas&quot; (sin la &quot;v&quot;) solo se asociar&#225;n si esta opci&#243;n estuviera establecida en menos de 0,90.     Un umbral de 1,00 solo permitir&#225; coincidencias exactas.    (tenga en cuenta que una &quot;coincidencia exacta&quot; aproximada podr&#237;a omitir diferencias, como el uso de may&#250;sculas y min&#250;sculas, el orden de las palabras y la puntuaci&#243;n).     El valor predeterminado es 0,80.</li><li><code>TransformationTable</code> : Tabla que permite asociar registros en funci&#243;n de asignaciones de valores personalizadas. Debe contener las columnas &quot;Desde&quot; y &quot;Hasta&quot;. Por ejemplo, &quot;Uvas&quot; se asocia a &quot;Pasas&quot; si se proporciona una tabla de transformaci&#243;n en la que la columna &quot;Desde&quot; contiene &quot;Uva&quot; y la columna &quot;Hasta&quot; contiene &quot;Pasas&quot;. Tenga en cuenta que la transformaci&#243;n se aplicar&#225; a todas las repeticiones del texto en la tabla de transformaci&#243;n. Con la tabla de transformaci&#243;n anterior, &quot;Las uvas son dulces&quot; tambi&#233;n se asociar&#225; a &quot;Las pasas son dulces&quot;.</li></ul><br />


## Examples

### Example #1 
Combinación aproximada interna izquierda de dos tablas basada en [FirstName]
```powerquery
Table.FuzzyNestedJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  "NestedTable",
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
		    CustomerID = 1,
		    FirstName1 = "Bob",
		    Phone = "555-1234",
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
