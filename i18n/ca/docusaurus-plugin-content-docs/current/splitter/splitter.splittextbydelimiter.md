---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Retorna una funció que divideix el text en una llista de text d'acord amb el delimitador especificat.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Retorna una funció que divideix el text en una llista de text d'acord amb el delimitador especificat.


## Examples

### Example #1
Divideix l'entrada amb una coma i ignora les comes entre cometes.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
