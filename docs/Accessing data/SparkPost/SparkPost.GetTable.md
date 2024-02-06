---
title: SparkPost.GetTable
---

# SparkPost.GetTable


Returns a table of available metrics from the SparkPost API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Remarks

This function can be used to retrieve data from a particular "Metrics" endpoint of the SparkPost API v1. When refreshing these tables or making calls to the SparkPost API using this connector, keep in mind that the SparkPost API has a strict API rate limit. If you see a 429 status code being returned from the SparkPost server you have hit the rate limit and will need to wait a few moments before making more calls. When choosing a value for the Number of days parameter, note that the API only stores 6 months worth of data.


## Examples

### Example #1 
Retrieves count_sent and count_rejected deliverability metrics for all campaign_ids aggregated over the last three days. 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
table
```



