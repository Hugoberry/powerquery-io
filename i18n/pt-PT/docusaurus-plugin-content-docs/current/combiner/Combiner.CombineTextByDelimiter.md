---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


Devolve uma função que combina uma lista de texto ao utilizar o delimitador especificado.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Devolve uma função que combina uma lista de valores de texto num único valor de texto, ao utilizar o delimitador especificado.


## Examples

### Example #1 
Combine uma lista de valores de texto com delimitador de ponto e vírgula.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Combine o texto de duas colunas através de um delimitador de vírgulas e aspas estilo CSV.
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
