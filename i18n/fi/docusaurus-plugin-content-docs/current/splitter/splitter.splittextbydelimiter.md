---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi määritetyn erottimen mukaisesti.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Palauttaa funktion, joka jakaa tekstin osiin tekstiluetteloksi määritetyn erottimen mukaisesti.


## Examples

### Example #1
Jaa syöte pilkulla ohittaen lainausmerkein kirjoitetut pilkut.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
