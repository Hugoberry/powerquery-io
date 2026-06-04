---
title: Csv.Document
---

# Csv.Document


Devolve o contido do documento CSV como unha táboa.


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

Devolve o contido do documento CSV como unha táboa.

-   `columns` pode ser nulo, o número de columnas, unha lista de nomes de columnas, un tipo de táboa ou un rexistro de opcións.
-   `delimiter` pode ser un carácter único, unha lista de caracteres ou o valor `""`, que indica que filas deben dividirse por caracteres de espazo en branco consecutivos. Valor predefinido: `","`.
-   Consulte `ExtraValues.Type` para ver os valores admitidos de `extraValues`.
-   `encoding` especifica o tipo de codificación do texto.

Se se especifica un rexistro para `columns` (e `delimiter`, `extraValues`e `encoding` son nulos), poden fornecerse os seguintes campos:

-   `Delimitador`: delimitador de columna dun único carácter. Valor predefinido: `","`.
-   `Columnas`: pode ser nulo, o número de columnas, unha lista de nomes de columnas ou un tipo de táboa. Se o número de columnas é inferior ao número indicado na entrada, as columnas adicionais ignoraranse. Se o número de columnas é superior ao número indicado na entrada, as columnas adicionais serán nulas. Se non se especifica ningún valor, o número de columnas determinarase segundo o indicado na entrada.
-   `Codificación`: codificación de texto do ficheiro. Valor predefinido: 65001 (UTF-8).
-   `CsvStyle`: especifica como se tratan as comiñas.
    -   `CsvStyle.QuoteAfterDelimiter` (valor predefinido): as comiñas dun campo só son importantes se van xusto despois do delimitador.
    -   `CsvStyle.QuoteAlways`: as comiñas nun campo sempre son significativas, independentemente de onde aparezan.
-   `QuoteStyle`: especifica como se manexan os saltos de liña citados.
    -   `QuoteStyle.Csv` (valor predefinido): os saltos de liña con comiñas trátanse como parte dos datos, non coma se fosen o final da fila actual.
    -   `QuoteStyle.None`: todos os saltos de liña trátanse como se fosen o final da fila actual, mesmo no caso de que estean dentro dun valor entre comiñas.
-   `IncludeByteOrderMark`: un valor lóxico que indica se se debe incluír unha marca de orde de bytes (BOM) ao comezo da saída CSV. Cando se define como verdadeiro, escríbese a BOM (por exemplo, BOM UTF-8: `0xEF 0xBB 0xBF`); cando se define como false, non se inclúe ningunha BOM. Esta opción só é aplicable en escenarios de saída. O predeterminado é `false`.
-   `ExtraValues`: Consulta `ExtraValues.Type` para ver os valores admitidos de ExtraValues.


## Examples

### Example #1
Proceso de texto CSV con cabeceiras de columna.
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
