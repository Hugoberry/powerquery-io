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

Dotazy na záznamy v instanci služby Microsoft Azure Data Manager for Energy


## Examples

### Example #1
Vrátí záznam, který obsahuje počet záznamů vyhovujících dotazu, a tabulku záznamů, která byla volitelně omezena parametrem limit.
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Navigační tabulka obsahující [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



