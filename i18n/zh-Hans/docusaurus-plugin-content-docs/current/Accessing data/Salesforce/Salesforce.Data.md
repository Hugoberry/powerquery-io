---
title: Salesforce.Data
---

# Salesforce.Data


返回来自 Salesforce 帐户的对象。 


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

返回凭据中提供的 Salesforce 帐户上的对象。该帐户将通过提供的环境 <code>loginUrl</code> 进行连接。如果没有提供任何环境，则该帐户将连接到生产(https://login.salesforce.com)。可提供可选记录参数 <code>options</code> 来指定附加属性。该记录可以包含以下字段:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 false)。</li><li><code>ApiVersion</code> : 此查询所使用的 Salesforce API 版本。未指定时，使用 API 版本 29.0。</li><li><code>Timeout</code> : 一个时间段，控制在放弃对服务器的请求之前等待的时间。默认值特定于源。</li></ul>    



## Category
Accessing data
