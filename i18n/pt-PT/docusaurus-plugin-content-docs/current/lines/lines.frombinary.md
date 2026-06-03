---
title: Lines.FromBinary
---

# Lines.FromBinary


Converte um valor binário numa lista de valores de texto divididos por quebras de linha. Se for especificado um estilo de cotação, as quebras de linha poderão aparecer entre aspas. Se includeLineSeparators tiver o valor true, os carateres de quebra de linha serão incluídos no texto.


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

Converte um valor binário numa lista de valores de texto divididos em quebras de linha.

-   `binary`: O valor binário a converter na lista.
-   `quoteStyle`: Especifica a forma como as quebras de linha são tratadas. O valor de `quoteStyle` pode ser `null`. O valor predefinição é `QuoteStyle.None`.
-   `includeLineSeparators`: especifica se deve incluir os caracteres de quebra de linha no texto. O valor de `includeLineSeparators` pode ser `null`. O valor predefinido é `falso`.
-   `encoding`: Especifica a codificação de texto do valor binário. O valor de `encoding` pode ser `null`. O valor predefinição é `65001` (UTF-8).

Se for especificado um registo para `quoteStyle` (e `includeLineSeparators` e `encoding` são `nulos`), podem ser fornecidos os seguintes campos de registo:

-   `QuoteStyle`: especifica a forma como as quebras de linha com aspas são processadas.
    -   `QuoteStyle.Csv`: as quebras de linha em aspas são tratadas como parte dos dados, não como o final da linha atual.
    -   `QuoteStyle.None`: todas as quebras de linha são tratadas como o final da linha atual, mesmo que ocorram dentro de um valor em aspas. Este valor é o padrão se a opção `CsvStyle` não for especificada.
-   `CsvStyle`: especifica como as aspas são processadas. Não deve ser utilizado com `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: as aspas num campo só são consideradas significativas se colocadas imediatamente a seguir ao `Delimitador`.
    -   `CsvStyle.QuoteAlways`: as aspas num campo são sempre significativas, independentemente de onde aparecem.
-   `Delimitador`: Um delimitador de um único carácter. Deve ser utilizado apenas com `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Especifica se os caracteres de quebra de linha devem ser incluídos no texto. O valor predefinido é `falso`.
-   `Codificação`: A codificação de texto do valor binário. O valor predefinição é `65001` (UTF-8).



## Category
Lines
