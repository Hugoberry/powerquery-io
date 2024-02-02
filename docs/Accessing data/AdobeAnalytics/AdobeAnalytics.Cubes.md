---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Returns the report suites in Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Returns a table of multidimensional packages from Adobe Analytics. An optional record parameter, <code>options</code>, may be specified to control the following options:    <ul><li><code>HierarchicalNavigation</code> : A logical (true/false) that sets whether to view the tables grouped by their schema names (default is false).</li><li><code>MaxRetryCount</code> : The number of retries to perform when polling for the result of the query. The default value is 120.</li><li><code>RetryInterval</code> : The duration of time between retry attempts. The default value is 1 second.</li><li><code>Implementation</code> : Specifies Adobe Analytics API version. Valid values are: &quot;2.0&quot;. Default uses API version 1.4.</li></ul>    



## Category
Accessing data
