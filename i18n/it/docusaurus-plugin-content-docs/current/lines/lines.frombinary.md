---
title: Lines.FromBinary
---

# Lines.FromBinary


Converte un valore binario in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni linee. Se si specifica uno stile della virgoletta, le interruzioni di riga possono essere visualizzate tra virgolette. Se includeLineSeparators è true, i caratteri di interruzione di riga vengono inclusi nel testo.


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

Converte un valore binario in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni di riga.

-   `binary`: il valore binario da convertire nell'elenco.
-   `quoteStyle`: specifica come vengono gestite le interruzioni di riga. Il valore di `quoteStyle` può essere `null`. Il valore predefinito è `QuoteStyle.None`.
-   `includeLineSeparators`: specifica se includere i caratteri di interruzione di riga nel testo. Il valore di `includeLineSeparators` può essere `null`. Il valore predefinito è `false`.
-   `encoding`: specifica la codifica del testo del valore binario. Il valore di `encoding` può essere `null`. Il valore predefinito è `65001` (UTF-8).

Se viene specificato un record per `quoteStyle` (e `includeLineSeparators` e `encoding` sono `null`), è possibile specificare i campi record seguenti:

-   `QuoteStyle`: specifica come vengono gestite le interruzioni di riga tra virgolette.
    -   `QuoteStyle.Csv`: le interruzioni di riga tra virgolette vengono considerate parte dei dati, non come fine della riga corrente.
    -   `QuoteStyle.None`: tutte le interruzioni di riga vengono considerate come fine della riga corrente, anche quando si verificano all'interno di un valore tra virgolette. Questo valore è quello predefinito se l'opzione `CsvStyle` non è specificata.
-   `CsvStyle`: specifica come vengono gestite le virgolette. Non deve essere usato con `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: le virgolette in un campo sono significative solo se immediatamente successive a `Delimiter`.
    -   `CsvStyle.QuoteAlways`: le virgolette in un campo sono sempre significative, indipendentemente dalla loro posizione.
-   `Delimiter`: un delimitatore di carattere singolo. Deve essere usato solo con `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: specifica se includere i caratteri di interruzione di riga nel testo. Il valore predefinito è `false`.
-   `Encoding`: la codifica del testo del valore binario. Il valore predefinito è `65001` (UTF-8).



## Category
Lines
