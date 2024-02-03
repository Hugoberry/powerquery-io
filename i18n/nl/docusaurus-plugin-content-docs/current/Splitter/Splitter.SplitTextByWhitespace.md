---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Retourneert een functie die bij een witruimte tekst splitst in een lijst met tekst.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Retourneert een functie die bij een witruimte tekst splitst in een lijst met tekst.


## Examples

### Example #1 
De invoer splitsen op spaties, waarbij aanhalingstekens zoals elk ander teken worden behandeld.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
