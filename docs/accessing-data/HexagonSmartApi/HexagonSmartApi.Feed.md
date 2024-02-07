---
title: HexagonSmartApi.Feed
---

# HexagonSmartApi.Feed



## Syntax

```powerquery
HexagonSmartApi.Feed(
    url as Uri.Type,
    optional headers as text,
    optional odataFeedVersion as text
) as table
```


## Remarks

Returns a table from a Hexagon PPM Smart® API OData feed.


## Examples

### Example #1 
Returns an OData service document in table form from a Hexagon PPM Smart® API OData feed.
```powerquery
HexagonSmartApi.Feed("https://example.com/SampleService/V1")
```

Result: 
```powerquery
#table({"Name"}, {{"Data"}, {"Signature"}})
```



