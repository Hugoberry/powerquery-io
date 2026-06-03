---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


使用 Microsoft Entra ID 从 Google BigQuery 数据库导入数据


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

返回一个表，其中列出了将 Microsoft Entra ID 用作`计费项目 ID` 的 Google BigQuery 中的可用项目。可以指定可选记录参数 `options` 来控制以下选项:

-   `ConnectionTimeout`: 持续时间，用于控制在放弃尝试建立到服务器的连接之前等待的时间长度。默认值为 ODBC Connection 超时值。
-   `CommandTimeout`: 持续时间，用于控制在取消服务器端查询之前允许该查询运行的时间长度。
-   `UseStorageApi`: 指定是否将 BigQuery 存储 API 用于大型结果集。默认值为 true，表示使用存储 API。设置为 false 则表示不使用存储 API
-   `AudienceUri`: 这是 ODBC 驱动程序可用于其令牌交换请求的受众 URI。此字段必须是完全限定的 URI (即 //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread)，其中 pool\_id 是用于标识工作人员池的全局唯一名称。

记录参数指定为 \[option1 = value1, option2 = value2...\]。


## Examples

### Example #1
使用 Microsoft Entra ID 列出 Google BigQuery 中的可用项目
```powerquery
GoogleBigQueryAad.Database()
```



