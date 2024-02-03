---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Returns a function that splits text into a list of text according to the specified delimiter.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Returns a function that splits text into a list of text according to the specified delimiter.


## Examples

### Example #1 
Split the input by comma, ignoring quoted commas.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
