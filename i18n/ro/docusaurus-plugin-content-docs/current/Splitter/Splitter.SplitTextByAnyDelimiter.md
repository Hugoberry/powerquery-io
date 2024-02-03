---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Returnează o funcţie care divizează textul într-o listă de text la oricare dintre delimitatoarele specificate.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text la oricare dintre delimitatoarele specificate.


## Examples

### Example #1 
Divizează intrarea prin virgulă sau punct și virgulă, ignorând ghilimelele și delimitatorii citați și începând de la începutul intrării.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Divizează intrarea prin virgulă sau punct și virgulă, ignorând ghilimelele și delimitatorii citați și începând de la sfârșitul intrării.
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
