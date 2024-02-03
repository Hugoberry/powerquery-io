---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Returnează o funcţie care divizează textul într-o listă de text la fiecare delimitator specificat în secvenţă.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Returnează o funcţie care divizează textul într-o listă de text la fiecare delimitator specificat în secvenţă.


## Examples

### Example #1 
Divizează intrarea prin virgulă, apoi punct și virgulă, începând de la începutul intrării.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Divizează intrarea prin virgulă, apoi punct și virgulă, tratând ghilimelele ca orice alt caracter și începând de la sfârșitul intrării.
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
