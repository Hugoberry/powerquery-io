---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Gibt eine Funktion zurück, die Text an den angegebenen Trennzeichen in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Gibt eine Funktion zurück, die Text an den angegebenen Trennzeichen in eine Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe durch Kommas oder Strichpunkte auf, wobei Anführungszeichen und Trennzeichen in Anführungszeichen ignoriert werden, und beginnen Sie am Anfang der Eingabe.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Teilen Sie die Eingabe durch Kommas oder Strichpunkte auf, ignorieren Sie Anführungszeichen und Trennzeichen in Anführungszeichen, und beginnen Sie am Ende der Eingabe.
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
