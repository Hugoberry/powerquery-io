---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Devuelve una función que divide el texto en una lista de texto según el delimitador especificado.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devuelve una función que divide el texto en una lista de texto según el delimitador especificado.


## Examples

### Example #1 
Divida la entrada por comas, omitiendo las comas entre comillas.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
