---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Vráti funkciu, ktorá kombinuje zoznam textu pomocou stanoveného oddeľovača.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vráti funkciu, ktorá kombinuje zoznam textových hodnôt do jednej textovej hodnoty pomocou stanoveného oddeľovača.


## Examples

### Example #1 
Skombinuje zoznam textových hodnôt pomocou bodkočiarkového oddeľovača.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Skombinujte text dvoch stĺpcov pomocou oddeľovača čiarok a úvodzoviek v štýle CSV.
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
