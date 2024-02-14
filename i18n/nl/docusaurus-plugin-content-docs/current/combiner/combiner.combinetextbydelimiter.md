---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Retourneert een functie die een lijst met tekst combineert met behulp van het opgegeven scheidingsteken.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Retourneert een functie die een lijst met tekstwaarden combineert tot één tekstwaarde met behulp van het opgegeven scheidingsteken.


## Examples

### Example #1 
Een lijst met tekstwaarden combineren met behulp van een puntkommascheidingsteken.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Combineer de tekst van twee kolommen met behulp van een kommascheidingsteken en aanhalingstekens in CSV-stijl.
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
