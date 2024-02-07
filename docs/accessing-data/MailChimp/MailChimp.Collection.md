---
title: MailChimp.Collection
---

# MailChimp.Collection


Returns a table with data from a MailChimp endpoint.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Makes a call to the MailChimp API and returns the resulting dataset as a table. Automatically pages through all results. Optional entityName parameter can be used for API endpoints where the root endpoint and main entityName in JSON response do not match.


## Examples

### Example #1 
Pulls a table of data from the MailChimp API&#39;s lists endpoint.
```powerquery
MailChimp.Collection("lists")
```

Result: 
```powerquery
A table with list data.
```


### Example #2 
Pulls a table of data from the MailChimp API&#39;s campaign-folders endpoint.
```powerquery
MailChimp.Collection("campaign-folders", "folders")
```

Result: 
```powerquery
A table with campaign-folders data.
```



