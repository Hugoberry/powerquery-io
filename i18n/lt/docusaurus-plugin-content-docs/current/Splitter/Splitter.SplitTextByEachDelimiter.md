---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties kiekvienu nurodytu skyrikliu sekoje.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties kiekvienu nurodytu skyrikliu sekoje.


## Examples

### Example #1 
Išskaidykite įvestį kableliu, tada kabliataškiu, pradėdami nuo įvesties pradžios.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Išskaidykite įvestį kableliu, tada kabliataškiu, kabutes traktuodami kaip bet kurį kitą simbolį ir pradėdami nuo įvesties pabaigos.
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
