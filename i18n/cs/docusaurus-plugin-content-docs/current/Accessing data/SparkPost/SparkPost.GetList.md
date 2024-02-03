---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

Tuto funkci jde použít na volání libovolného z koncových bodů „List“ nabízených v rozhraní SparkPost API v1. Při volání rozhraní SparkPost API pomocí této funkce mějte na paměti, že rozhraní SparkPost API má striktní limit četnosti volání rozhraní API. Pokud vidíte, že server SparkPost vrací stavový kód 429, dosáhli jste tohoto limitu četnosti a před dalším voláním bude nutné chvíli počkat.


## Examples

### Example #1 
Vrátí tabulku s jedním sloupcem naplněnou daty z jednoho z koncových bodů „Lists“ rozhraní SparkPost API v1 (podrobnosti naleznete v dokumentaci SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



