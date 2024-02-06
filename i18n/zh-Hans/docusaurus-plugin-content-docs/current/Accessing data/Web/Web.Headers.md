---
title: Web.Headers
---

# Web.Headers


返回从 URL 下载的 HTTP 标头作为记录值。


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

返回从 <code>url</code> 下载的标头作为记录。可以提供可选记录参数 <code>options</code>来指定其他属性。记录可以包含以下字段:    <ul><li><code>Query</code> : 以编程方式将查询参数添加到 URL，无需担心转义。</li><li><code>ApiKeyName</code> : 如果目标站点具有 API 密钥的概念，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。凭据中提供了实际的密钥值。</li><li><code>Headers</code> : 将此值指定为记录将向 HTTP 请求提供其他标头。</li><li><code>Timeout</code> : 如果将此值指定为持续时间，则将更改 HTTP 请求的超时时间。默认值为 100 秒。</li><li><code>ExcludedFromCacheKey</code> : 如果将此值指定为列表，则将排除这些 HTTP 标头键，使其不作为用于缓存数据的计算的一部分。</li><li><code>IsRetry</code> : 将此逻辑值指定为 true 将在提取数据时忽略缓存中的所有现有响应。</li><li><code>ManualStatusHandling</code> : 如果将此值指定为列表，将阻止对其响应具有这些状态代码之一的 HTTP 请求进行任何内置处理。</li><li><code>RelativePath</code> : 如果将此值指定为文本，则会在发出请求之前将其追加到基 URL。</li></ul>    使用 HEAD 方法发出 HTTP 请求。在自定义数据连接器上下文之外，只有一部分响应标头可用(出于安全原因)。    


## Examples

### Example #1 
使用 RelativePath 和查询选项查询 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; 的 HTTP 标头。
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
