---
title: SDMX.Contents
---

# SDMX.Contents



## Syntax

```powerquery
SDMX.Contents(
    url as Uri.Type,
    Option as text,
    optional Language as text
) as table
```


## Details

Get data from an SDMX RESTful web service that supports the CSV format.


## Examples

### Example #1 
Get data from an SDMX RESTful web service that supports the CSV format.
```powerquery
SDMX.Contents(url,"Show codes and labels","en")
```

Result: 
```powerquery
Data from the SDMX web service in a table format.
```



