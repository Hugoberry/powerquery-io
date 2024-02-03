---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties bet kuriais nurodytais skyrikliais.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą ties bet kuriais nurodytais skyrikliais.


## Examples

### Example #1 
Išskaidykite įvestį kableliu arba kabliataškiu, nepaisydami kabučių ir kabutėmis apskliaustų skyriklių, pradėdami nuo įvesties pradžios.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Išskaidykite įvestį kableliu arba kabliataškiu, nepaisydami kabučių ir kabutėmis apskliaustų skyriklių, pradėdami nuo įvesties pabaigos.
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
