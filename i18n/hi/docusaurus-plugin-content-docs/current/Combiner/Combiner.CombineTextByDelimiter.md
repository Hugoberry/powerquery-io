---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

एक फ़ंक्शन लौटाता है जो निर्दिष्ट डिलिमिटर का उपयोग करके टेक्स्ट की सूची को जोड़ता है.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

एक ऐसा फ़ंक्शन लौटाता है जो निर्दिष्ट डिलिमिटर का उपयोग करके पाठ मूल्यों की एक सूची को किसी एकल पाठ मूल्य में संयोजित करता है.


## Examples

### Example #1 
किसी अर्धविराम डिलिमिटर का उपयोग करके पाठ मानों की एक सूची संयोजित करें.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
किसी अल्पविराम डिलिमिटर और CSV-शैली के उद्धरण का उपयोग करके दो स्तंभों के पाठ को संयोजित करें.
```powerquery
let
    Source = #table(
        type table [Column1 = text, Column2 = text],
        {{"a", "b"}, {"c", "d,e,f"}}
    ),
    Merged = Table.CombineColumns(
        Source,
        {"Column1", "Column2"},
        Combiner.CombineTextByDelimiter(",", QuoteStyle.Csv),
        "Merged"
    )
in
    Merged
```

Result: 
```powerquery
#table(
    type table [Merged = text],
    {{"a,b"}, {"c,""d,e,f"""}}
)
```




## Category
Combiner
