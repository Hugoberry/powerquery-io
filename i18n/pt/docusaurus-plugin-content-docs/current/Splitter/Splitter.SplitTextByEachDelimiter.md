---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Returns a function that splits text into a list of text at each specified delimiter in sequence.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Returns a function that splits text into a list of text at each specified delimiter in sequence.


## Examples

### Example #1 
Split the input by comma, then semicolon, starting from the beginning of the input.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Split the input by comma, then semicolon, treating quotes like any other character and starting from the end of the input.
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
