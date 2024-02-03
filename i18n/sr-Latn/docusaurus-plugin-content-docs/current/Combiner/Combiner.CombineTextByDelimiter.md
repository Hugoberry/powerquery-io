---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Vraća funkciju koja kombinuje listu teksta pomoću navedenog znaka za razgraničavanje.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Vraća funkciju koja kombinuje listu tekstualnih vrednosti u jednu tekstualnu vrednost pomoću navedenog znaka za razgraničavanje.


## Examples

### Example #1 
Kombinujte listu tekstualnih vrednosti pomoću znaka za razgraničavanje tačkom i zarezom.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Kombinujte tekst dve kolone koristeći znak za razgraničavanje zarez i citiranje CSV stila.
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
