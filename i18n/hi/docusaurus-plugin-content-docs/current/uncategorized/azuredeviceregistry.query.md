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

Azure डिवाइस रजिस्ट्री से एसेट्स और डिवाइसेस को पुल करने के लिए कनेक्टर


## Examples

### Example #1

```powerquery
AzureDeviceRegistry.Query("resources")
```



