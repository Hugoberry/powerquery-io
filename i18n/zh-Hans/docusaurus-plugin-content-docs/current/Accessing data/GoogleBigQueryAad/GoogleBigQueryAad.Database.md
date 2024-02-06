---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


使用 Azure AD 从 Google BigQuery 数据库导入数据


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      使用 Azure AD 返回一张表，其中列出了<code>计费项目 ID</code> 在 Google BigQuery 中可用的项目。可指定一个可选的记录参数 <code>options</code> 来控制以下选项:      <ul>        <li><code>ConnectionTimeout</code>: 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值是 ODBC 连接超时值。</li>        <li><code>CommandTimeout</code>: 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。</li>        <li><code>UseStorageApi</code>: 指定是否使用 BigQuery Storage API 来处理大型结果集。默认值为 true，表示使用存储 API。设置为 false 则表示不使用存储 API</li>        <li><code>AudienceUri</code>: 这是 ODBC 驱动程序可用于其令牌交换请求的受众 URI。此字段必须是完全限定的 URI (即 //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider)，其中 pool_id 是用于标识工作人员池的全局唯一名称。</li>      </ul>    记录参数指定为 [option1 = value1, option2 = value2...]。    


## Examples

### Example #1 
使用 Azure AD 列出 Google BigQuery 中的可用项目
```powerquery
GoogleBigQueryAad.Database()
```



