---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

从 Snowflake 计算仓库导入数据。


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

返回一个表，其中列出<code>服务器</code>的 Snowflake Computing <code>仓库</code>中的表。可指定一个可选记录参数 <code>options</code> 来控制以下选项:<ul><li><code>Role</code>: 一个文本值，用作连接的角色名称。</li><li><code>CreateNavigationProperties</code>: 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)</li><li><code>ConnectionTimeout</code>: 等待来自 Snowflake 的网络响应的秒数。</li><li><code>CommandTimeout</code>: 等待执行查询的秒数。</li></ul>    


## Examples

### Example #1 
列出 Snowflake 仓库中的表。
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



