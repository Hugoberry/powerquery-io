---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


## Description

कुंजी Webtrends मैट्रिक्स वाली तालिका लौटाता है.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Webtrends KeyMetrics समाप्ति बिंदु के लिए कॉल करता है और समस्त डेटा को एक तालिका के रूप में लौटाता है.


## Examples

### Example #1 
पिछले 30 दिनों में टैनेंट 98765 के लिए मुख्य मैट्रिक्स की तालिका पुल करता है
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
मुख्य मैट्रिक्स की एक तालिका
```



