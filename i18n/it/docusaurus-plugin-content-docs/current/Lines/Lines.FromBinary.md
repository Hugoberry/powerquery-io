---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Converte un valore binario in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni linee. Se si specifica uno stile della virgoletta, le interruzioni di riga possono essere visualizzate tra virgolette. Se includeLineSeparators è true, i caratteri di interruzione di riga vengono inclusi nel testo.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Converte un valore binario in un elenco di valori di testo suddivisi in corrispondenza delle interruzioni linee. Se si specifica uno stile della virgoletta, le interruzioni di riga possono essere visualizzate tra virgolette. Se includeLineSeparators è true, i caratteri di interruzione di riga vengono inclusi nel testo.



## Category
Lines
