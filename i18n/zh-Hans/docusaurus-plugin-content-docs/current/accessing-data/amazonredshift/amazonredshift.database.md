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

返回一个表，其中列出了数据库 `database` 中 Amazon Redshift 群集 `server` 上的表。可以指定可选记录参数 `options` 来控制以下选项:

-   `Provider Name`: 用作连接的提供程序名称的文本值。使用 Microsoft 身份验证时将使用它。
-   `Batch Size`: 在单次调用服务器时提取的行数。


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



