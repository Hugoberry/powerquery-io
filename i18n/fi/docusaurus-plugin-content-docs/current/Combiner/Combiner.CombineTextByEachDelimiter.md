---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

Palauttaa funktion, joka yhdistää tekstiluettelon käyttäen erottimien sarjaa.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Palauttaa funktion, joka yhdistää tekstiarvojen luettelon yksittäiseksi tekstiarvoksi käyttäen erotinsarjaa.


## Examples

### Example #1 
Yhdistä tekstiarvojen luettelo käyttäen erotinsarjaa.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
