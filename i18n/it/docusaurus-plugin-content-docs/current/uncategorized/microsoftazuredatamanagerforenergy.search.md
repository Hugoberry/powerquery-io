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

Esegue query per i record nell'istanza del Data Manager di Microsoft Azure per il settore energetico


## Examples

### Example #1
Restituisce un record che contiene il conteggio dei record che soddisfano la query e una tabella di record che è stata limitata dal parametro limit come opzione facoltativa
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Una tabella di navigazione contenente [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



