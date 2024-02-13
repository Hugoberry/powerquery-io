---
title: Lines.FromBinary
---

# Lines.FromBinary


Converts a binary value to a list of text values split at lines breaks.  If a quote style is specified, then line breaks may appear within quotes.  If includeLineSeparators is true, then the line break characters are included in the text.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Converts a binary value to a list of text values split at lines breaks.  If a quote style is specified, then line breaks may appear within quotes.  If includeLineSeparators is true, then the line break characters are included in the text.



## Category
Lines
