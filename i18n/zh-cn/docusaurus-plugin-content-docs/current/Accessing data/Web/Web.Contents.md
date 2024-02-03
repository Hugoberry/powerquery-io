---
title: Web.Contents
---

# Web.Contents


## Description

将从该 URL 下载的内容返回为二进制。


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

以二进制形式返回从 <code>url</code> 下载的内容。可以提供可选记录参数 <code>options</code> 以指定其他属性。记录可以包含以下字段:    <ul><li><code>Query</code> : 以编程方式将查询参数添加到 URL，无需担心转义。</li><li><code>ApiKeyName</code> : 如果目标站点具有 API 密钥的概念，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。凭据中提供了实际的密钥值。</li><li><code>Headers</code> : 将此值指定为记录将向 HTTP 请求提供其他标头。</li><li><code>Timeout</code> : 如果将此值指定为持续时间，则将更改 HTTP 请求的超时时间。默认值为 100 秒。</li><li><code>ExcludedFromCacheKey</code> : 如果将此值指定为列表，则将排除这些 HTTP 标头键，使其不作为用于缓存数据的计算的一部分。</li><li><code>IsRetry</code> : 将此逻辑值指定为 true 将在提取数据时忽略缓存中的所有现有响应。</li><li><code>ManualStatusHandling</code> : 如果将此值指定为列表，将阻止对其响应具有这些状态代码之一的 HTTP 请求进行任何内置处理。</li><li><code>RelativePath</code> : 如果将此值指定为文本，则会在发出请求之前将其追加到基 URL。</li><li><code>Content</code> : 指定此值会将 Web 请求从 GET 更改为 POST，并使用选项的值作为 POST 的内容。</li></ul>    HTTP 请求是作为 GET (未指定内容时)或 POST (如果存在内容)发出的。POST 请求只能匿名发出。    <br />    HTTP 响应的标头可作为二进制结果的元数据提供。在自定义数据连接器上下文之外，只有一部分响应标头可用(出于安全原因)。    


## Examples

### Example #1 
使用 RelativePath 和“查询”选项检索 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; 的内容。这些选项可用于动态查询静态基 URL。
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2 
对 URL 执行 POST，以传递二进制 JSON 有效负载并将响应分析为 JSON。
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3 
连接到接受身份验证密钥作为其查询字符串一部分的安全 URL。密钥并非通过在 M 中对密钥进行硬编码来提供(这回带来安全风险)，    而是通过在 M 中指定密钥名称(而不是其值)、选择 Web API 身份验证，并输入密钥值作为 Web API 凭据的一部分来实现。    以这种方式使用时，以下示例将生成对 &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt; 的请求。
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
