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

      返回一张表，其中列出了 Google BigQuery 中可用的项目。可指定一个可选的记录参数 <code>options</code> 来控制以下选项:      <ul>        <li><code>ConnectionTimeout</code>: 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值是 ODBC 连接超时值。</li>        <li><code>CommandTimeout</code>: 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。</li>        <li><code>BillingProject</code>: 计费项目 ID。默认值是第一个可用的项目。</li>        <li><code>UseStorageApi</code>: 指定是否使用 BigQuery Storage API 来处理大型结果集。默认值为 true，表示使用存储 API。设置为 false 则表示不使用存储 API</li>      </ul>    可将记录参数指定为 [option1 = value1, option2 = value2...]。    


## Examples

### Example #1 
列出 Google BigQuery 中的可用项目
```powerquery
GoogleBigQuery.Database()
```



