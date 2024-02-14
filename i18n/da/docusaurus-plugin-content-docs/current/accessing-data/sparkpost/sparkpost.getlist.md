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


## Remarks

Denne funktion kan bruges til at kalde et af de "Lister"-slutpunkter, der tilbydes af SparkPost API-v1. Når der foretages kald til API'EN SparkPost ved hjælp af denne funktion, skal du huske, at API'EN SparkPost har en bundet hastighedsgrænse. Hvis du kan se en 429 statuskode, der returneres fra serveren SparkPost, har du nået grænsen.


## Examples

### Example #1 
Returnerer en tabel med en enkelt kolonne, der er udfyldt med data fra et af slutpunkterne for SparkPost API v1 &#34;Lister&#34; (se flere oplysninger i dokumentationen).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



