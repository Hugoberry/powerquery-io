---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Returns a table with lead activities.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Makes a call to the Marketo REST API endpoint at <code>url</code>/rest/v1/activities.json. All activities in list <code>activityIds</code> that have occurred since <code>startTime</code> are returned.


## Examples

### Example #1 
Pulls a table of &#34;Visit Webpage&#34; activities since November 1, 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
A table with details of all "Visit Webpage" activities since November 1
```



