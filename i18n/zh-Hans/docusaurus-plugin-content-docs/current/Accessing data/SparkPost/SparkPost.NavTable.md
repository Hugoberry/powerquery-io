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

检索 SparkPost 连接器公开的内置表，其中包含在用户指定的天数内聚合的数据。使用此连接器刷新这些表或调用 SparkPost API 时，请注意 SparkPost API 有严格的 API 速率限制。如果 SparkPost 服务器返回了 429 状态代码，表明已达到速率限制，需要先稍等片刻，再执行多个调用。选择“天数”参数的值时，请注意 API 仅存储相当于 6 个月的数据。


