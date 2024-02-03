---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Atgriež funkciju, kas kombinē teksta sarakstu, izmantojot norādīto norobežotāju.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Atgriež funkciju, kas teksta vērtību sarakstu apvieno vienā teksta vērtībā, izmantojot norādīto norobežotāju.


## Examples

### Example #1 
Kombinējiet teksta vērtību sarakstu, izmantojot semikolu norobežotāju.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Apvienojiet divu kolonnu tekstu, izmantojot komata atdalītāju un CSV stila pēdiņās.
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
