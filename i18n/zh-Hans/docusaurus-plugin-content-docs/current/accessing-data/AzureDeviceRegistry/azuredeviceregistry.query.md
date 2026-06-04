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

用于从 Azure 设备注册表中拉取资产和设备的连接器


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



