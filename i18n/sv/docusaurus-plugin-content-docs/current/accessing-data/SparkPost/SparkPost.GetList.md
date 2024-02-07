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

Den här funktionen kan användas för att anropa någon av de Listor-slutpunkter som erbjuds av SparkPost API v1. När du gör anrop till SparkPost API:t med den här funktionen så bör du tänka på att SparkPost API:t har en strik hastighetsbegränsning. Om du ser statuskod 429 returnerad från SparkPost-servern så har du uppnått hastighetsgränsen och kommer att behöva vänta en stund innan du gör några fler anrop.


## Examples

### Example #1 
Returnerar en tabell med en enskild kolumn ifylld med data från en av SparkPost API v1 Listor-slutpunkterna (se SparkPost-dokumentationen för information).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



