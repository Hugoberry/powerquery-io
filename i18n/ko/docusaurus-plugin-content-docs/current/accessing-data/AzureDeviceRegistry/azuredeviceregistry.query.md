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

Azure 장치 레지스트리에서 자산 및 장치를 가져오는 커넥터


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



