---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Devuelve una función que divide el texto en una lista de texto en cualquiera de los delimitadores especificados.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Devuelve una función que divide el texto en una lista de texto en cualquiera de los delimitadores especificados.


## Examples

### Example #1 
Divida la entrada por coma o punto y coma, omitiendo las comillas y los delimitadores entre comillas y empezando desde el principio de la entrada.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divida la entrada por coma o punto y coma, omitiendo las comillas y los delimitadores entre comillas y empezando desde el final de la entrada.
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
