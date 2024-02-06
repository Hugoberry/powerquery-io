---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Returns a function that splits text into a list of text at whitespace.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returns a function that splits text into a list of text at whitespace.


## Examples

### Example #1 
Split the input by whitespace characters, treating quotes like any other character.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
