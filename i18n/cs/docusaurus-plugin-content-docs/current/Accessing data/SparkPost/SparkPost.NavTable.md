---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Details

Načtení vestavěných tabulek vystavených přes konektor SparkPost s daty agregovanými za uživatelem zadaný počet dnů. Při aktualizaci těchto tabulek nebo volání na rozhraní SparkPost API pomocí tohoto konektoru mějte na paměti, že rozhraní SparkPost API má striktní limit četnosti volání rozhraní API. Pokud vidíte, že server SparkPost vrací stavový kód 429, dosáhli jste tohoto limitu četnosti a před dalším voláním bude nutné chvíli počkat. Při výběru hodnot pro parametr Počet dnů mějte na paměti, že rozhraní API ukládá jenom 6 měsíců dat.


