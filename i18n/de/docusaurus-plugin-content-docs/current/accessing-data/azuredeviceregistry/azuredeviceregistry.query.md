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

Konnektor zum Pullen von Ressourcen und Geräten aus Azure Device Registry


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



