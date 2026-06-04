---
title: Lines.FromText
---

# Lines.FromText


Converte un valor de texto nunha lista de valores de texto dividida por quebras de liña. Se includeLineSeparators é verdadeiro, os caracteres de quebra de liña inclúense no texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converter un valor de texto nunha lista de valores de texto divididos en saltos de liña.

-   `text`: O valor de texto a converter na lista de valores de texto.
-   `quoteStyle`: Especifica como se xestionan os saltos de liña. O valor de `quoteStyle` pode ser `null`. O valor por defecto é `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica se se inclúen os caracteres de salto de liña no texto. O valor de `includeLineSeparators` pode ser `null`. O valor por defecto é `false`.

Se se especifica un rexistro para `quoteStyle` (e `includeLineSeparators` é `null`), poden fornecerse os seguintes campos:

-   `QuoteStyle`: especifica como se manexan os saltos de liña citados.
    -   `QuoteStyle.Csv`: os saltos de liña citados trátanse como parte dos datos, non coma se fosen o final da fila actual.
    -   `QuoteStyle.None`: todos os saltos de liña trátanse como se fosen o final da fila actual, mesmo no caso de que estean dentro dun valor citado. Este valor é o predeterminado se non se especifica a opción `CsvStyle`.
-   `CsvStyle`: especifica como se tratan as citas. Non debe utilizarse con `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: As citas nun campo só son significativas inmediatamente despois do `Delimiter`.
    -   `CsvStyle.QuoteAlways`: as citas nun campo sempre son significativas, independentemente de onde aparezan.
-   `Delimiter`: delimitador dun único carácter. Só debe utilizarse con `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Especifica se se inclúen os caracteres de salto de liña no texto. O valor por defecto é `false`.



## Category
Lines
