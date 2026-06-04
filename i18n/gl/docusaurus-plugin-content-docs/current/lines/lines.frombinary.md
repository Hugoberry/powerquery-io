---
title: Lines.FromBinary
---

# Lines.FromBinary


Converte un valor binario nunha lista de valores de texto dividida por quebras de liña. Se se especifica un estilo de comiñas, as quebras de liña poden aparecer entre comiñas. Se includeLineSeparators é verdadeiro, os caracteres de quebra de liña inclúense no texto.


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

Converte un valor binario nunha lista de valores de texto divididos en saltos de liña.

-   `binary`: O valor binario que converter na lista.
-   `quoteStyle`: Especifica como se xestionan os saltos de liña. O valor de `quoteStyle` pode ser `null`. O valor por defecto é `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica se se inclúen os caracteres de salto de liña no texto. O valor de `includeLineSeparators` pode ser `null`. O valor por defecto é `false`.
-   `encoding`: Especifica a codificación de texto do valor binario. O valor de `encoding` pode ser `null`. O valor por defecto é `65001` (UTF-8).

Se se especifica un rexistro para `quoteStyle` (e `includeLineSeparators` e `encoding` son `null`), poden fornecerse os seguintes campos:

-   `QuoteStyle`: especifica como se manexan os saltos de liña citados.
    -   `QuoteStyle.Csv`: os saltos de liña citados trátanse como parte dos datos, non coma se fosen o final da fila actual.
    -   `QuoteStyle.None`: todos os saltos de liña trátanse como se fosen o final da fila actual, mesmo no caso de que estean dentro dun valor citado. Este valor é o predeterminado se non se especifica a opción `CsvStyle`.
-   `CsvStyle`: especifica como se tratan as citas. Non debe utilizarse con `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: as citas nun campo só son importantes se van xusto despois do `Delimiter`.
    -   `CsvStyle.QuoteAlways`: as citas nun campo sempre son significativas, independentemente de onde aparezan.
-   `Delimiter`: delimitador dun único carácter. Só debe utilizarse con `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Especifica se se inclúen os caracteres de salto de liña no texto. O valor por defecto é `false`.
-   `Encoding`: A codificación de texto do valor binario. O valor por defecto é `65001` (UTF-8).



## Category
Lines
