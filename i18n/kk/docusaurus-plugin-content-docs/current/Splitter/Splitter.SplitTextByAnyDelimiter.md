---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Көрсетілген бөлгіштердің кез келгенінде мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Көрсетілген бөлгіштердің кез келгенінде мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1 
Кірісті үтір немесе нүктелі үтір арқылы бөледі. Тырнақшаларды және тырнақшаларға алынған бөлгіштерді елемейді және кірістің басынан бастайды.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Кірісті үтір немесе нүктелі үтір арқылы бөледі. Тырнақшаларды және тырнақшаларға алынған бөлгіштерді елемейді әрі кірістің соңынан бастайды.
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
