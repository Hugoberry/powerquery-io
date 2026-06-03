---
title: Lines.FromText
---

# Lines.FromText


Converte um valor de texto em uma lista de valores de texto divididos em quebras de linha. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converte um valor de texto em uma lista de valores de texto divididos em quebras de linha.

-   `text`: O valor de texto a ser convertido na lista de valores de texto.
-   `quoteStyle`: Especifica como as quebras de linha são tratadas. O valor de `quoteStyle` pode ser `null`. O valor padrão é `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica se os caracteres de quebra de linha devem ser incluídos no texto. O valor de `includeLineSeparators` pode ser `null`. O valor padrão é `false`.

Se um registro for especificado para `quoteStyle` (e `includeLineSeparators` for `null`), os seguintes campos de registro poderão ser fornecidos:

-   `QuoteStyle`: especifica como as quebras de linha entre aspas são tratadas.
    -   `QuoteStyle.Csv`: as quebras de linha entre aspas são tratadas como parte dos dados, não como o final da linha atual.
    -   `QuoteStyle.None`: todas as quebras de linha são tratadas como o final da linha atual, mesmo quando ocorrem dentro de um valor entre aspas. Esse valor será o padrão se a opção `CsvStyle` não for especificada.
-   `CsvStyle`: especifica como as aspas são tratadas. Não deve ser usado com `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` : As aspas em um campo só são significativas imediatamente após o `Delimiter`.
    -   `CsvStyle.QuoteAlways`: As aspas em um campo são sempre significativas, independentemente de onde aparecem.
-   `Delimitador`: Um delimitador de caractere único. Deve ser usado somente com `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica se os caracteres de quebra de linha devem ser incluídos no texto. O valor padrão é `false`.



## Category
Lines
