---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Returns a table with report content from Webtrends.


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

Makes a call to the given Webtrends reporting endpoint and returns all data as a table.


## Examples

### Example #1 
Makes a call to the Webtrends visitors report endpoint for data in the last 30 days
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
A table of visitor data
```



