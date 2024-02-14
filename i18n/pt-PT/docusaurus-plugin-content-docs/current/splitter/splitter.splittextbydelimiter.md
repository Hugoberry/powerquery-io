---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Devolve uma função que divide texto numa lista de texto de acordo com o delimitador especificado.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devolve uma função que divide texto numa lista de texto de acordo com o delimitador especificado.


## Examples

### Example #1 
Divida a entrada por vírgula, ignorando vírgulas entre aspas.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
