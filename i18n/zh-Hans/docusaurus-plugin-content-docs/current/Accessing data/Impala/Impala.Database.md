---
title: Impala.Database
---

# Impala.Database


从 Impala 群集导入数据


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

从 Impala 群集 <code>server</code> 导入数据。若未指定端口，则将使用默认端口 21050。


## Examples

### Example #1 
列出 Impala 群集中的表。
```powerquery
Impala.Database("localhost:21050")
```



