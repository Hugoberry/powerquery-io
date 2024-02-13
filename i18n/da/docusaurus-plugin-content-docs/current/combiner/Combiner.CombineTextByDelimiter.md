---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Returnerer en funktion, der kombinerer en liste over tekstværdier ved hjælp af den angivne afgrænser.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Returnerer en funktion, der kombinerer en liste over tekstværdier til en enkelt tekstværdi ved hjælp af den angivne afgrænser.


## Examples

### Example #1 
Kombiner en liste over tekstværdier ved hjælp af et semikolonafgrænser.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Kombiner teksten i to kolonner ved hjælp af en kommaseparator og citationstegn i CSV-stil.
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
