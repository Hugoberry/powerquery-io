---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Введіть URL-адресу кінцевої точки інтерфейсу REST API програми Azure Enterprise, пов’язану з вашою реєстрацією.


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Повертає список звітів і місяців, доступний в інтерфейсі API Azure Enterprise.


## Examples

### Example #1 
Використовуються функція AzureEnterprise.Tables і перехід до окремого значення, щоб отримати результати.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Таблиця
```



