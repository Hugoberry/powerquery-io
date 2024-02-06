---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Kaydınızla ilişkilendirilen Azure Kurumsal REST API uç noktasının URL&#39;sini girin


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Azure Kurumsal API'sinden raporların ve ayların bir listesini döndürür


## Examples

### Example #1 
AzureEnterprise.Tables işlevini kullanarak sonuçları almak üzere belirli bir değere gitme.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Tablo
```



