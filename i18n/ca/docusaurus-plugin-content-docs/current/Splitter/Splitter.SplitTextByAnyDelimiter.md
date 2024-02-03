---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Retorna una funció que divideix el text en una llista de text a qualsevol dels delimitadors especificats.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text a qualsevol dels delimitadors especificats.


## Examples

### Example #1 
Divideix l&#39;entrada per una coma o un punt i coma. Ignora les cometes i els delimitadors entre cometes i comença pel principi de l&#39;entrada.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divideix l&#39;entrada per una coma o un punt i coma. Ignora les cometes i els delimitadors entre cometes i comença pel final de l&#39;entrada.
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
