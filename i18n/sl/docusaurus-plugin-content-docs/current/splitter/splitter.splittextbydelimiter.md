---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Vrne funkcijo, ki razdeli besedilo v seznam besedila glede na navedeno ločilo.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Vrne funkcijo, ki razdeli besedilo v seznam besedila glede na navedeno ločilo.


## Examples

### Example #1
Razdelite vnos z vejica, pri tem pa prezri navedene vejice.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
