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

Devuelve el contenido del documento CSV como una tabla.    <ul>      <li>        <code>columns</code> puede ser null, el número de columnas, una lista de nombres de columna, un tipo de tabla o un registro de opciones.      </li>      <li>        <code>delimiter</code> puede ser un solo carácter, una lista de caracteres o el valor <code>""</code>, que indica que las filas deben dividirse por caracteres de espacio en blanco consecutivos. Valor predeterminado: <code>","</code>.      </li>      <li>        Consulte <code>ExtraValues.Type</code> para obtener los valores admitidos de <code>extraValues</code>.      </li>       <li>        <code>encoding</code> especifica el tipo de codificación de texto.      </li>    </ul>    Si se especifica un registro para <code>columns</code> (y <code>delimiter</code>, <code>extraValues</code>y <code>encoding</code> son null), se pueden proporcionar los siguientes campos de registro:    <ul>      <li>        <code>Delimiter</code>: delimitador de columna. Valor predeterminado: <code>","</code>.      </li>      <li>        <code>Columns</code>: puede ser null, el número de columnas, una lista de nombres de columna o un tipo de tabla. Si el número de columnas es menor que el número encontrado en la entrada, se omitirán las columnas adicionales. Si el número de columnas es mayor que el número encontrado en la entrada, las columnas adicionales serán null. Cuando no se especifica, el número de columnas viene determinado por lo que se encuentra en la entrada.      </li>      <li>        <code>Encoding</code>: codificación de texto del archivo. Valor predeterminado: 65001 (UTF-8).      </li>      <li>         <code>CsvStyle</code>: especifica cómo se controlan las comillas.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (valor predeterminado): las comillas de un campo solo son significativas inmediatamente después del delimitador.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: las comillas de un campo siempre son significativas, independientemente de dónde aparezcan.          </li>        </ul>      </li>      <li>            <code>QuoteStyle</code>: especifica cómo se controlan los saltos de línea entre comillas.        <ul>          <li>            <code>QuoteStyle.Csv</code> (valor predeterminado): los saltos de línea entre comillas se tratan como parte de los datos, no como el final de la fila actual.          </li>          <li>            <code>QuoteStyle.None</code>: todos los saltos de línea se tratan como el final de la fila actual, incluso cuando se producen dentro de un valor entre comillas.          </li>        </ul>     </li>    </ul>..


## Examples

### Example #1 
Procesa texto CSV con encabezado de columna
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




## Category
Accessing data
