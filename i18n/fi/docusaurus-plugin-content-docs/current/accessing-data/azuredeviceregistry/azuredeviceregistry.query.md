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

Liitin resurssien ja laitteiden noutamiseen Azure-laiterekisteristä.


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



