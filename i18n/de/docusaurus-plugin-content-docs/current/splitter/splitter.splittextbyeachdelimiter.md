---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Gibt eine Funktion zurück, die Text nacheinander an den angegebenen Trennzeichen in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Gibt eine Funktion zurück, die Text nacheinander an den angegebenen Trennzeichen in eine Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe durch Kommas und dann durch Strichpunkte auf, beginnend am Anfang der Eingabe.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Teilen Sie die Eingabe durch Kommas und dann durch Strichpunkte auf, und behandeln Sie Anführungszeichen wie alle anderen Zeichen, und beginnen Sie am Ende der Eingabe.
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
