---
title: AzureDeviceRegistry.Query
---

# AzureDeviceRegistry.Query



## Syntax

```powerquery
AzureDeviceRegistry.Query(
    scope as text,
    optional subscriptions as text,
    optional namespaces as text,
    optional customAttributes as text,
    optional options as record
) as table
```


## Remarks

З’єднувач для отримання ресурсів і пристроїв із реєстру пристроїв Azure


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



