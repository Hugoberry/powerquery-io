---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši jebkuram no norādītajiem atdalītājiem, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši jebkuram no norādītajiem atdalītājiem, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Sadalīt ievadi pēc komata vai semikola, ignorējot pēdiņas un pēdiņas norobežotājus un sākot no ievades sākuma.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Sadalīt ievadi pēc komata vai semikola, ignorējot pēdiņas un pēdiņas norobežotājus un sākot no ievades beigām.
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
