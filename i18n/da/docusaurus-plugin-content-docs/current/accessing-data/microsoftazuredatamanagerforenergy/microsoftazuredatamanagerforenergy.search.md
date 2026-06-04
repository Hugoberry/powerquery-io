---
title: MicrosoftAzureDataManagerForEnergy.Search
---

# MicrosoftAzureDataManagerForEnergy.Search



## Syntax

```powerquery
MicrosoftAzureDataManagerForEnergy.Search(
    serviceName as text,
    dataPartition as text,
    kind as text,
    query as text,
    optional limit as number,
    optional returnedFields as text
) as table
```


## Remarks

Forespørgsler om poster i Microsoft Azure Data Manager for Energy-forekomsten


## Examples

### Example #1
Returnerer en post, der indeholder antallet af poster, der opfylder forespørgslen, samt en tabel med poster, der eventuelt er blevet begrænset af grænseparameteren
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
En navigationstabel, der indeholder [Antal = 4947, Poster = #tabel({""Records""}, {{[...]}, {[...]}})]
```



