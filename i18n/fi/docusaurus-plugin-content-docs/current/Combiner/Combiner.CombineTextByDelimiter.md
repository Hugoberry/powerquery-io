---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Palauttaa funktion, joka yhdistää tekstiluettelon käyttäen määritettyä erotinta.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Palauttaa funktion, joka yhdistää tekstiarvoluettelon yksittäiseksi tekstiarvoksi käyttäen määritettyä erotinta.


## Examples

### Example #1 
Yhdistä tekstiarvojen luettelo puolipiste-erottimen avulla.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Yhdistä kahden sarakkeen teksti käyttämällä pilkkuerotinta ja CSV-tyylistä lainausmerkkiä.
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
