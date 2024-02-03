---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

Smartsheet API से JSON परिणाम लौटाता है


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

निर्दिष्ट समाप्ति बिंदु पर Smartsheet 2.0 REST API के लिए कॉल करता है और JSON रिकॉर्ड के रूप में परिणाम लौटाता है.


## Examples

### Example #1 
पत्रक Smartsheet API समाप्ति बिंदु से अतिरिक्त निर्दिष्ट तर्कों के साथ डेटा पुल करता है
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
Smartsheet API द्वारा लौटाई गई पत्रक जानकारी वाली एक तालिका
```



