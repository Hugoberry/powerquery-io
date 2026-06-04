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

Vyhľadávanie záznamov v inštancii Microsoft Azure Data Manager pre Energy


## Examples

### Example #1
Vráti záznam, ktorý obsahuje počet záznamov, ktoré vyhovujú požiadavke, a tabuľku záznamov, ktorá bola voliteľne obmedzená parametrom limit
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Navigačná tabuľka obsahujúca [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



