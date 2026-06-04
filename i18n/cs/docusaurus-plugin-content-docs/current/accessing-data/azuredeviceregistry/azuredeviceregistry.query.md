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

Konektor pro vyžádání prostředků a zařízení ze služby Azure Device Registry


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



