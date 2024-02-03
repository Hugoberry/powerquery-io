---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Тіркелумен байланысты Azure Enterprise REST API соңғы нүктесінің URL мекенжайын енгізіңіз


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Azure Enterprise API ішінен қолжетімді есептер тізімі мен айларды қайтарады


## Examples

### Example #1 
AzureEnterprise.Tables функциясын пайдалану және нәтижелер алу үшін нақты мәнге шарлау.
```powerquery
let
    Көз = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Мазмұны = Көз{[Key="Contents"]}[Data]
in
    Мазмұны
```

Result: 
```powerquery
Кесте
```



