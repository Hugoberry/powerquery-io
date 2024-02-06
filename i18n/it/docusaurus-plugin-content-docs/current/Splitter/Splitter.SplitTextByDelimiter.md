---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Restituisce una funzione che suddivide il testo in un elenco di testo in base al delimitatore specificato.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Restituisce una funzione che suddivide il testo in un elenco di testo in base al delimitatore specificato.


## Examples

### Example #1 
Dividere l&#39;input per virgola, ignorando le virgole tra virgolette.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
