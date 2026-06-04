---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Returnează o funcţie care divizează textul într-o listă de text conform delimitatorului specificat.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Returnează o funcţie care divizează textul într-o listă de text conform delimitatorului specificat.


## Examples

### Example #1
Divizează intrarea prin virgulă, ignorând virgulele citate.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
