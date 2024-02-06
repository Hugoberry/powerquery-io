---
title: Kusto.Contents
---

# Kusto.Contents


Azure Data Explorer (Kusto) से डेटा आयात करता है


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

आपके Azure Data Explorer (Kusto) इंस्टैंस से डेटा आयात करता है


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



