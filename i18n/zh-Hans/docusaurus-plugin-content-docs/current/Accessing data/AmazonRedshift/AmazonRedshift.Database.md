---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


从 Amazon Redshift 数据库导入数据。


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

返回一个表，其中列出了<code>数据库</code>中 Amazon Redshift 群集<code>服务器</code>上的表。可将可选记录参数<code>选项</code>指定用于控制以下选项:<ul><li><code>提供程序名称</code>: 要用作连接的提供程序名称的文本值。使用 Microsoft 身份验证时将使用此项。</li><li><code>批大小</code>: 在单次调用服务器时提取的行数。</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



