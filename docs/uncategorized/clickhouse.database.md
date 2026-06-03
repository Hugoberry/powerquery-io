---
title: ClickHouse.Database
---

# ClickHouse.Database



## Syntax

```powerquery
ClickHouse.Database(
    server as text,
    port as number,
    optional database as text,
    optional options as record
) as table
```


## Remarks

ClickHouse ODBC connector for Power Query


## Examples

### Example #1
Returns a navigation table with list of play.clickhouse.com tables, that can be folded
```powerquery
ClickHouse.Database("https://play.clickhouse.com")
```



