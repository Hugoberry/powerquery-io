---
title: Combiner.CombineTextByDelimiter
---

# Combiner.CombineTextByDelimiter


## Description

Gibt eine Funktion zurück, die eine Liste von Text mithilfe des angegebenen Trennzeichens kombiniert.


## Syntax

```powerquery
Combiner.CombineTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Gibt eine Funktion zurück, die eine Liste mit Textwerten unter Verwendung des angegebenen Trennzeichens zu einem einzelnen Textwert zusammenfasst.


## Examples

### Example #1 
Kombinieren Sie eine Liste von Textwerten mithilfe eines Semikolons.
```powerquery
Combiner.CombineTextByDelimiter(";")({"a", "b", "c"})
```

Result: 
```powerquery
"a;b;c"
```


### Example #2 
Kombinieren Sie den Text von zwei Spalten mithilfe eines Komma-Trennzeichens und CSV-Anführungszeichens.
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
