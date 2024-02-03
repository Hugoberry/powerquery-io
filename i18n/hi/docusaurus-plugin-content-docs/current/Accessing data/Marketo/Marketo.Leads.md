---
title: Marketo.Leads
---

# Marketo.Leads


## Description

लीड विवरण वाली एक तालिका लौटाता है.


## Syntax

```powerquery
Marketo.Leads(
    url as text,
    leadIds as list,
    optional options as any
) as table
```


## Details

<code>url</code>/rest/v1/leads.json पर Marketo REST API एंडपॉइंट को कॉल करता है. सूची <code>leadIds</code> के सभी लीड लौटा दिए गए हैं.


## Examples

### Example #1 
तीन लीड के लिए विवरण पुल करता है
```powerquery
Marketo.Leads("https://100-AAA-999.mktorest.com/rest", {50, 2343, 88498})
```

Result: 
```powerquery
आपूर्ति किए गए लीड के लिए विवरण वाली एक तालिका
```



