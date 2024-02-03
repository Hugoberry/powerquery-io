---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza di ogni delimitatore specificato in sequenza.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza di ogni delimitatore specificato in sequenza.


## Examples

### Example #1 
Dividere l&#39;input per virgola, quindi punto e virgola, a partire dall&#39;inizio dell&#39;input.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Dividere l&#39;input per virgola, quindi punto e virgola, trattando le virgolette come qualsiasi altro carattere e iniziando dalla fine dell&#39;input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
