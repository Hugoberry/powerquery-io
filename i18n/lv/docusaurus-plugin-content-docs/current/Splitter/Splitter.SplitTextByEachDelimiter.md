---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katram secīgi norādītajam atdalītājam, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši katram secīgi norādītajam atdalītājam, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1 
Sadalīt ievadi pēc komata, pēc tam semikolu, sākot no ievades sākuma.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Sadalīt ievadi pēc komata, pēc tam semikolu, apstrādājot pēdiņas kā citas rakstzīmes un sākot no ievades beigām.
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
