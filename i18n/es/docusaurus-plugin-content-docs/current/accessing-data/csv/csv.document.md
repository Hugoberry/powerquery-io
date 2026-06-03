---
title: Csv.Document
---

# Csv.Document


Devuelve el contenido del documento CSV como una tabla.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Devuelve el contenido del documento CSV como una tabla.

-   `columns` puede ser null, el número de columnas, una lista de nombres de columna, un tipo de tabla o un registro de opciones.
-   `delimiter` puede ser un solo carácter, una lista de caracteres o el valor `""`, que indica que las filas deben dividirse por caracteres de espacio en blanco consecutivos. Valor predeterminado: `","`.
-   Consulte `ExtraValues.Type` para obtener los valores admitidos de `extraValues`.
-   `encoding` especifica el tipo de codificación de texto.

Si se especifica un registro para `columns` (y `delimiter`, `extraValues`, y `encoding` son null), se pueden proporcionar los siguientes campos de registro:

-   `Delimitador`: un delimitador de columna de un solo carácter. Valor predeterminado: `","`.
-   `Columnas`: puede ser null, el número de columnas, una lista de nombres de columna o un tipo de tabla. Si el número de columnas es inferior al número indicado en la entrada, se ignorarán las columnas adicionales. Si el número de columnas es superior al número indicado en la entrada, las columnas adicionales serán null. Cuando no se especifica, el número de columnas viene determinado por lo que se encuentra en la entrada.
-   `Codificación`: codificación de texto del archivo. Valor predeterminado: 65001 (UTF-8).
-   `CsvStyle`: especifica cómo se controlan las comillas.
    -   `CsvStyle.QuoteAfterDelimiter` (valor predeterminado): las comillas de un campo solo son significativas inmediatamente después del delimitador.
    -   `CsvStyle.QuoteAlways`: las comillas de un campo siempre son significativas, independientemente de dónde aparezcan.
-   `QuoteStyle`: especifica cómo se controlan los saltos de línea entre comillas.
    -   `QuoteStyle.Csv` (valor predeterminado): los saltos de línea entre comillas se tratan como parte de los datos, no como el final de la fila actual.
    -   `QuoteStyle.None`: todos los saltos de línea se tratan como el final de la fila actual, incluso cuando se producen dentro de un valor entre comillas.
-   `IncludeByteOrderMark`: un valor lógico que indica si se debe incluir una marca de orden de bytes (BOM) al principio de la salida csv. Cuando se establece en true, se escribe la marca BOM (por ejemplo, UTF-8 BOM: `0xEF 0xBB 0xBF`); cuando se establece en false, no se incluye ninguna marca BOM. Esta opción solo es aplicable en escenarios de salida. El valor predeterminado es `false`.
-   `ExtraValues`: Consulta `ExtraValues.Type` para obtener información sobre los valores admitidos de ExtraValues.


## Examples

### Example #1
Procesar texto CSV con encabezados de columna.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
