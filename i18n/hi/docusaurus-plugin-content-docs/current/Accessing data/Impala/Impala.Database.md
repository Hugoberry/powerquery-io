---
title: Impala.Database
---

# Impala.Database


Impala क्लस्टर से डेटा आयात करें


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Impala क्लस्टर <code>server</code> से डेटा आयात करें. यदि कोई पोर्ट निर्दिष्ट नहीं था, तो डिफ़ॉल्ट पोर्ट 21050 का उपयोग किया जाएगा.


## Examples

### Example #1 
Impala क्लस्टर में तालिकाएँ सूचीबद्ध करें.
```powerquery
Impala.Database("localhost:21050")
```



