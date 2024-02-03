---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Retorna uma função que divide o texto em uma lista de texto de acordo com o delimitador especificado.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retorna uma função que divide o texto em uma lista de texto de acordo com o delimitador especificado.


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
