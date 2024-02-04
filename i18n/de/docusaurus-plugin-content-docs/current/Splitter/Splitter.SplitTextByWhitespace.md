---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Gibt eine Funktion zurück, die Text an den Leerzeichen zu einer Liste mit Text aufteilt.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Gibt eine Funktion zurück, die Text an den Leerzeichen zu einer Liste mit Text aufteilt.


## Examples

### Example #1 
Teilen Sie die Eingabe durch Leerzeichen auf, und behandeln Sie Anführungszeichen wie alle anderen Zeichen.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
