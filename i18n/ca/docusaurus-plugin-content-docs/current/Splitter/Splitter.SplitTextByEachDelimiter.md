---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Retorna una funció que divideix el text en una llista de text a cada delimitador especificat a la seqüència.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text a cada delimitador especificat a la seqüència.


## Examples

### Example #1 
Divideix l&#39;entrada per una coma i, a continuació, per un punt i coma, començant pel principi de l&#39;entrada.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divideix l&#39;entrada per una coma i, després, un punt i coma. Tracta les cometes com qualsevol altre caràcter i comença pel final de l&#39;entrada.
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
