---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


从 Google BigQuery 数据库导入数据。


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

返回一个表，其中列出了 Google BigQuery 中的可用项目。可以指定可选记录参数 `options` 来控制以下选项:

-   `ConnectionTimeout`: 持续时间，用于控制在放弃尝试建立到服务器的连接之前等待的时间长度。默认值为 ODBC Connection 超时值。
-   `CommandTimeout`: 持续时间，用于控制在取消服务器端查询之前允许该查询运行的时间长度。
-   `BillingProject`: 计费项目 ID。默认值是第一个可用项目。
-   `UseStorageApi`: 指定是否将 BigQuery 存储 API 用于大型结果集。默认值为 true，表示使用存储 API。设置为 false 则表示不使用存储 API

记录参数指定为 \[option1 = value1, option2 = value2...\]。


## Examples

### Example #1
列出 Google BigQuery 中的可用项目
```powerquery
GoogleBigQuery.Database()
```



