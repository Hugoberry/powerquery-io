---
title: Lines.FromBinary
---

# Lines.FromBinary


Converte um valor binário em uma lista de valores de texto divididos em quebras de linha. Se um delimitador for especificado, as quebras de linha possivelmente aparecerão entre aspas. Se includeLineSeparators for true, os caracteres de quebra de linha serão incluídos no texto.


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

Converte um valor binário em uma lista de valores de texto divididos em quebras de linha.

-   `binary`: O valor binário a ser convertido na lista.
-   `quoteStyle`: Especifica como as quebras de linha são tratadas. O valor de `quoteStyle` pode ser `null`. O valor padrão é `QuoteStyle.None`.
-   `includeLineSeparators`: Especifica se os caracteres de quebra de linha devem ser incluídos no texto. O valor de `includeLineSeparators` pode ser `null`. O valor padrão é `false`.
-   `encoding`: Especifica a codificação de texto do valor binário. O valor de `encoding` pode ser `null`. O valor padrão é `65001` (UTF-8).

Se um registro for especificado para `quoteStyle` (e `includeLineSeparators` e `encoding` forem `null`), os seguintes campos de registro podem ser fornecidos:

-   `QuoteStyle`: especifica como as quebras de linha entre aspas são tratadas.
    -   `QuoteStyle.Csv`: as quebras de linha entre aspas são tratadas como parte dos dados, não como o final da linha atual.
    -   `QuoteStyle.None`: todas as quebras de linha são tratadas como o final da linha atual, mesmo quando ocorrem dentro de um valor entre aspas. Esse valor será o padrão se a opção `CsvStyle` não for especificada.
-   `CsvStyle`: especifica como as aspas são tratadas. Não deve ser usado com `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter` : As aspas em um campo só são significativas imediatamente após o `Delimiter`.
    -   `CsvStyle.QuoteAlways`: As aspas em um campo são sempre significativas, independentemente de onde aparecem.
-   `Delimitador`: Um delimitador de caractere único. Deve ser usado somente com `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: especifica se os caracteres de quebra de linha devem ser incluídos no texto. O valor padrão é `false`.
-   `Encoding`: A codificação de texto do valor binário. O valor padrão é `65001` (UTF-8).



## Category
Lines
