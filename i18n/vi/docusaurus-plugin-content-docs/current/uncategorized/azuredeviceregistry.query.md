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

Trình kết nối để kéo Tài nguyên và Thiết bị từ Sổ đăng ký thiết bị Azure


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



