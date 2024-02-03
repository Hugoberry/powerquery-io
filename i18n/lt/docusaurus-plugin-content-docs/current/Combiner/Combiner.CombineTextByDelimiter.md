---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Pateikiama funkcija, kuri sujungia teksto sąrašą naudodama nurodytus skyriklius.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Pateikiama funkcija, kuri sujungia teksto reikšmių sąrašą į vieną teksto reikšmę naudodama nurodytus skyriklius.


## Examples

### Example #1 
Sujunkite tekstinių reikšmių sąrašą kaip skyriklį naudodami kabliataškį.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Sujunkite dviejų stulpelių tekstą kaip skyriklį naudodami kablelį ir CSV stiliaus kabutes.
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
