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

Enerji için Microsoft Azure Veri Yöneticisi örneğindeki kayıtlar ile ilgili sorgular


## Examples

### Example #1
Sorgunun koşullarını yerine getiren kayıtların sayısını ve isteğe bağlı olarak sınır parametresiyle sınırlanan kayıtların tablosunu içeren bir kayıt döndürür
```powerquery
MicrosoftAzureDataManagerForEnergy.Search("fb82bc98-a537-4c2b-a4ed-cf7c53eed5f9", "4b12b551-b235-46b3-9f79-6a61adc75b6a", "platform4321", "opendes", "osdu:wks:master-data--Well:1.0.0", "*", 2, null)
```

Result: 
```powerquery
[Sayı = 4947, Kayıtlar = #table({""Records""}, {{[...]}, {[...]}})] içeren bir gezinti tablosu
```



