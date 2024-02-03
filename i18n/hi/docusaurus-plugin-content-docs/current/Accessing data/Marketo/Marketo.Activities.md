---
title: Marketo.Activities
---

# Marketo.Activities


## Description

लीड गतिविधियों वाली तालिका लौटाता है.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

<code>url</code>/rest/v1/activities.json पर Marketo REST API एंडपॉइंट को कॉल करता है. सूची <code>activityIds</code> में सभी गतिविधियाँ जो <code>startTime</code> के बाद उत्पन्न हुई हैं, वे लौटा दी गई हैं.


## Examples

### Example #1 
1 नवंबर 2015 से &#34;वेबपृष्ठ पर जाएँ&#34; गतिविधियों की एक तालिका पुल करता है
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
1 नवंबर से सभी "वेबपृष्ठ पर जाएँ" गतिविधियों के विवरण वाली की एक तालिका
```



