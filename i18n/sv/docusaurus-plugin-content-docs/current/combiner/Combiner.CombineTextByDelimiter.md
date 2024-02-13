---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Returnerar en funktion som kombinerar en lista med text med den angivna avgränsare.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnerar en funktion som kombinerar en lista med textvärden till ett enskilt textvärde med angiven avgränsare.


## Examples

### Example #1 
Kombinera en lista med textvärden med en semikolonavgränsare.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Kombinera texten i två kolumner med kommaavgränsare och CSV-citattecken.
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
