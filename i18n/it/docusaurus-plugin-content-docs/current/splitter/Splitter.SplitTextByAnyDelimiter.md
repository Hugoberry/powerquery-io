---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza di uno qualsiasi dei delimitatori specificati.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Restituisce una funzione che suddivide il testo in un elenco di testo in corrispondenza di uno qualsiasi dei delimitatori specificati.


## Examples

### Example #1 
Dividere l&#39;input per virgola o punto e virgola, ignorando le virgolette e i delimitatori tra virgolette, iniziando dall&#39;inizio dell&#39;input.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Dividere l&#39;input per virgola o punto e virgola, ignorando le virgolette e i delimitatori tra virgolette, iniziando dalla fine dell&#39;input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
