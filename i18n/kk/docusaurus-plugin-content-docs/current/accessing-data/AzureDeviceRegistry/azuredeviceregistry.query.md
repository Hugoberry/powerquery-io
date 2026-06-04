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

Azure құрылғыларының тізбесінен активтер мен құрылғыларды тартуға арналған қосқыш


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



