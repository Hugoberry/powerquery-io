---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Devolve unha función que divide texto nunha lista de texto segundo o delimitador especificado.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Devolve unha función que divide texto nunha lista de texto segundo o delimitador especificado.


## Examples

### Example #1 
Divide a entrada por coma, ignorando as comas.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
