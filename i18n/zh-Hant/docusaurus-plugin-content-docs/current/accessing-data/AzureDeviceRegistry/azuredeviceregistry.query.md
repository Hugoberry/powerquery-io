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

連接器可從 Azure 裝置登錄檔提取資產與裝置


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



