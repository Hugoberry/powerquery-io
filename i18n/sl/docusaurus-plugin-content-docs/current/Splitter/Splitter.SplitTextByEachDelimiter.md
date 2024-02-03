---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri vsakem navedenem ločilu v zaporedju.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri vsakem navedenem ločilu v zaporedju.


## Examples

### Example #1 
Razdelite vnos z vejica in nato s podpičjem od začetka vnosa.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Razdelite vnos z vejica, nato podpičjem, obravnavajte narekovaje kot kateri koli drug znak in začnite od konca vnosa.
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
