---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Restituisce una funzione che combina un elenco di testo utilizzando il delimitatore specificato.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Restituisce una funzione che combina un elenco di valori di testo in un singolo valore di testo utilizzando il delimitatore specificato.


## Examples

### Example #1 
Combina un elenco di valori di testo utilizzando un delimitatore di punto e virgola.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Combinare il testo di due colonne usando un delimitatore di virgola e le virgolette in stile CSV.
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
