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

Túto funkciu možno použiť na volanie ktoréhokoľvek z koncových bodov List poskytovaných v rozhraní SparkPost API v1. Pri volaní rozhrania SparkPost API pomocou tejto funkcie majte na pamäti, že rozhranie SparkPost API má prísne obmedzený počet volaní rozhrania API. Ak vidíte, že server SparkPost vráti kód stavu 429, znamená to, že ste dosiahli limit počtu volaní a pred ďalším volaním budete musieť chvíľu počkať.


## Examples

### Example #1 
Vráti tabuľku s jedným stĺpcom naplnenou údajmi z jedného z koncových bodov List rozhrania SparkPost API v1 (podrobnosti nájdete v dokumentácii SparkPost).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



