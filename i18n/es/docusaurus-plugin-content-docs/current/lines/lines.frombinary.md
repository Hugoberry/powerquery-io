---
title: Lines.FromBinary
---

# Lines.FromBinary


Convierte un valor binario en una lista de valores de texto dividida por saltos de línea. Si se especifica un estilo de comillas, los saltos de línea pueden aparecer entrecomillados. Si el valor includeLineSeparators es True, los caracteres de saltos de línea se incluyen en el texto.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Convierte un valor binario en una lista de valores de texto divididos en saltos de línea.

-   `binary`: valor binario que se va a convertir en la lista.
-   `quoteStyle`: Especifica cómo se controlan los saltos de línea. El valor de `quoteStyle` puede ser `null`. El valor predeterminado es `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica si se deben incluir los caracteres de salto de línea en el texto. El valor de `includeLineSeparators` puede ser `null`. El valor predeterminado es `false`.
-   `encoding`: especifica la codificación de texto del valor binario. El valor de `encoding` puede ser `null`. El valor predeterminado es `65001` (UTF-8).

Si se especifica un registro para `quoteStyle` (y `includeLineSeparators` y `encoding` son `null`), se pueden proporcionar los siguientes campos de registro:

-   `QuoteStyle`: especifica cómo se controlan los saltos de línea entre comillas.
    -   `QuoteStyle.Csv`: los saltos de línea entre comillas se tratan como parte de los datos, no como el final de la fila actual.
    -   `QuoteStyle.None`: todos los saltos de línea se tratan como el final de la fila actual, incluso cuando se producen dentro de un valor entre comillas. Este valor es el valor predeterminado si no se especifica la opción `CsvStyle`.
-   `CsvStyle`: especifica cómo se controlan las comillas. No se debe usar con `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: las comillas de un campo solo son significativas inmediatamente después del `Delimiter`.
    -   `CsvStyle.QuoteAlways`: las comillas de un campo siempre son significativas, independientemente de dónde aparezcan.
-   `Delimiter`: delimitador de un solo carácter. Solo se debe usar con `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica si se deben incluir los caracteres de salto de línea en el texto. El valor predeterminado es `false`.
-   `Encoding`: codificación de texto del valor binario. El valor predeterminado es `65001` (UTF-8).



## Category
Lines
