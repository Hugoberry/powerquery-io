---
title: Marketo.Leads
---

# Marketo.Leads


## Description

Returns a table with lead details.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

Makes a call to the Marketo REST API endpoint at <code>url</code>/rest/v1/leads.json. All leads in list <code>leadIds</code> are returned.


## Examples

### Example #1 
Pulls the details for three leads
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
A table with details for the supplied leads
```



