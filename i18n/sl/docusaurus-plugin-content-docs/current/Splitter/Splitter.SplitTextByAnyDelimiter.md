---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri katerem koli navedenem ločilu.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Vrne funkcijo, ki razdeli besedilo v seznam besedila pri katerem koli navedenem ločilu.


## Examples

### Example #1 
Razdelite vnos z vejica ali podpičjem, prezri narekovaje in narekovaje ter začnite od začetka vnosa.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Razdelite vnos z vejica ali podpičjem, prezri narekovaje in narekovaje ter začnite od konca vnosa.
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
