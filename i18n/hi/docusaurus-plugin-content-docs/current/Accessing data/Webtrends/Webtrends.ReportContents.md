---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Webtrends से रिपोर्ट सामग्री वाली एक तालिका लौटाता है.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

दिए गए Webtrends रिपोर्टिंग समाप्ति बिंदु के लिए कॉल करता है और समस्त डेटा को एक तालिका के रूप में लौटाता है.


## Examples

### Example #1 
Webtrends विज़िटर्स रिपोर्ट समाप्ति बिंदु के लिए पिछले 30 दिनों के डेटा के लिए कॉल करता है
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
विज़िटर डेटा की एक तालिका
```



