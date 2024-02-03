---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal nurodytą skyriklį.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Pateikiama funkcija, kuri išskaido tekstą į teksto sąrašą pagal nurodytą skyriklį.


## Examples

### Example #1 
Išskaidykite įvestį kableliu, nepaisydami kablelių kabutėse.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
