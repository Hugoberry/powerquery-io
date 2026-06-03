---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


डिस्कवरी मोड में Fabric Kusto क्लस्टर से डेटा आयात करें.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

आपके KQL डेटाबेस इंस्टैंस से डेटा आयात करता है


## Examples

### Example #1
स्टॉर्म ईवेंट्स संबंधी जानकारी की तालिका वापस करता है
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
"मदद" क्लस्टर में "नमूना" डेटाबेस के स्टॉर्म ईवेंट्स की तालिका
```



