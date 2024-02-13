---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

Retrieve the built-in tables exposed by the SparkPost connector with data aggregated over a user-specified number of days. When refreshing these tables or making calls to the SparkPost API using this connector, keep in mind that the SparkPost API has a strict API rate limit. If you see a 429 status code being returned from the SparkPost server you have hit the rate limit and will need to wait a few moments before making more calls. When choosing a value for the Number of days parameter, note that the API only stores 6 months worth of data.


