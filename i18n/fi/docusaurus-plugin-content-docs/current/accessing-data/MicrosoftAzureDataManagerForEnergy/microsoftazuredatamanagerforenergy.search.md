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

Kyselyt Microsoft Azure Data Manager for Energy -esiintymän tietueista


## Examples

### Example #1
Palauttaa tietueen, joka sisältää kyselyn täyttävien tietueiden määrän, sekä tietuetaulukon, jota rajaparametri on valinnaisesti rajoittanut
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
Siirtymistaulukko, joka sisältää [Count = 4947, Records = #table({""Records""}, {{[...]}, {[...]}})]
```



