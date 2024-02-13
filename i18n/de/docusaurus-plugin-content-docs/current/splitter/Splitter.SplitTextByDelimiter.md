---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Gibt eine Funktion zurück, die Text auf der Grundlage des angegebenen Trennzeichens in eine Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Gibt eine Funktion zurück, die Text auf der Grundlage des angegebenen Trennzeichens in eine Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe durch Kommas auf, ignorieren Sie in Anführungszeichen gesetzte Kommas.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
