---
title: Lines.FromText
---

# Lines.FromText


Convierte un valor de texto en una lista de valores de texto dividida por saltos de línea. Si el valor de includeLineSeparators es true, los caracteres de saltos de línea se incluyen en el texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Convierte un valor de texto en una lista de valores de texto divididos en saltos de línea.

-   `text`: valor de texto que se va a convertir en la lista de valores de texto.
-   `quoteStyle`: Especifica cómo se controlan los saltos de línea. El valor de `quoteStyle` puede ser `null`. El valor predeterminado es `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica si se deben incluir los caracteres de salto de línea en el texto. El valor de `includeLineSeparators` puede ser `null`. El valor predeterminado es `false`.

Si se especifica un registro para `quoteStyle` (y `includeLineSeparators` es `null`), se pueden proporcionar los siguientes campos de registro:

-   `QuoteStyle`: especifica cómo se controlan los saltos de línea entre comillas.
    -   `QuoteStyle.Csv`: los saltos de línea entre comillas se tratan como parte de los datos, no como el final de la fila actual.
    -   `QuoteStyle.None`: todos los saltos de línea se tratan como el final de la fila actual, incluso cuando se producen dentro de un valor entre comillas. Este valor es el valor predeterminado si no se especifica la opción `CsvStyle`.
-   `CsvStyle`: especifica cómo se controlan las comillas. No se debe usar con `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: las comillas de un campo solo son significativas inmediatamente después del `Delimiter`.
    -   `CsvStyle.QuoteAlways`: las comillas de un campo siempre son significativas, independientemente de dónde aparezcan.
-   `Delimiter`: delimitador de un solo carácter. Solo se debe usar con `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica si se deben incluir los caracteres de salto de línea en el texto. El valor predeterminado es `false`.



## Category
Lines
