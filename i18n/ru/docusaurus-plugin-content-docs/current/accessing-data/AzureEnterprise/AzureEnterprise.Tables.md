---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


Введите URL-адрес конечной точки REST API Azure Enterprise, связанной с вашим соглашением о регистрации


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Remarks

Возвращает список отчетов и месяцев, доступный в Azure Enterprise API


## Examples

### Example #1 
Использование функции AzureEnterprise.Tables и переход к конкретному значению для получения результатов.
```powerquery
let
    Source = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Contents = Source{[Key="Contents"]}[Data]
in
    Contents
```

Result: 
```powerquery
Таблица
```



