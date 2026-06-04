---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši norādītajam atdalītājam, izveidojot teksta vērtību sarakstu.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Tiek atgriezta funkcija, kas nodrošina teksta sadali atbilstoši norādītajam atdalītājam, izveidojot teksta vērtību sarakstu.


## Examples

### Example #1
Sadalīt ievadi pēc komata, ignorējot pēdiņās norādītos komatus.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
