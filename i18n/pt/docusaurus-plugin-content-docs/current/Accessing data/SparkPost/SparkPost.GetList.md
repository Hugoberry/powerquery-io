---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

This function can be used to call any of the "Lists" endpoints offered by the SparkPost API v1. When making calls to the SparkPost API using this function, keep in mind that the SparkPost API has a strict API rate limit. If you see a 429 status code being returned from the SparkPost server you have hit the rate limit and will need to wait a few moments before making more calls.


## Examples

### Example #1 
Returns a table with a single column populated with data from one of the SparkPost API v1 &#34;Lists&#34; endpoints (see SparkPost documentation for details).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



