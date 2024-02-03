---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Retorna una funció que divideix el text en una llista de text d&#39;acord amb el delimitador especificat.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retorna una funció que divideix el text en una llista de text d'acord amb el delimitador especificat.


## Examples

### Example #1 
Divideix l&#39;entrada amb una coma i ignora les comes entre cometes.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
