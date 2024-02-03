---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Olyan függvényt ad vissza, amely szöveges értékekből álló listát egyesít a megadott elválasztó karakter használatával.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Olyan függvényt ad vissza, amely egy szövegértékben egyesíti a szövegértéklistát a megadott elválasztó használatával.


## Examples

### Example #1 
A szöveges értékek listája pontosvesszővel elválasztva vonható össze.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Két oszlop szövegének egyesítése vesszővel elválasztva és CSV-stílusú idézőjelek használatával.
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
