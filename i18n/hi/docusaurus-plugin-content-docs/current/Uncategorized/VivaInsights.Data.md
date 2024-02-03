---
title: VivaInsights.Data
---

# VivaInsights.Data



## Syntax

```powerquery
VivaInsights.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional advancedParameters as record
) as table
```


## Details

कार्यस्थल विश्लेषण से साप्ताहिक मेट्रिक्स और विशेषता डेटा को आयात करें.


## Examples

### Example #1 
विभाजन में प्रत्येक मापित कर्मचारी के लिए दृश्यमान विशेषताओं और प्रत्येक सप्ताह के मैट्रिक्स वाली एक तालिका लौटाता है.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



