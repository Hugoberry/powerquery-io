---
title: Snowflake.Databases
---

# Snowflake.Databases


从 Snowflake 计算仓库导入数据。


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

返回一个表，其中列出`服务器`的 Snowflake Computing `仓库`中的表。可指定一个可选记录参数 `options` 来控制以下选项:

-   `Role`: 一个文本值，用作连接的角色名称。
-   `CreateNavigationProperties`: 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)
-   `ConnectionTimeout`: 等待来自 Snowflake 的网络响应的秒数。
-   `CommandTimeout`: 等待执行查询的秒数。


## Examples

### Example #1
列出 Snowflake 仓库中的表。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



