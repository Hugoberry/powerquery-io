---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


Restituisce una funzione che suddivide il testo in un elenco di testo in base alle lunghezze e agli offset specificati.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Restituisce una funzione che divide il testo in un elenco di testo in base agli offset e alle lunghezze specificati. La lunghezza Null indica che tutti gli input rimanenti devono essere inclusi.


## Examples

### Example #1 
Dividere l&#39;input in base alle coppie di posizione e lunghezza specificate, a partire dall&#39;inizio dell&#39;input. Si noti che gli intervalli in questo esempio si sovrappongono.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Dividere l&#39;input in base alle coppie di posizione e lunghezza specificate, a partire dalla fine dell&#39;input.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Dividere l&#39;input in un codice postale a lunghezza fissa seguito da un nome di città a lunghezza variabile.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
