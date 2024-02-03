---
title: WebAction.Request
---

# WebAction.Request


## Description

创建以下操作:实施后，将执行 HTTP 请求的结果作为二进制值返回。


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

创建一个操作，该操作在执行时针对使用 HTTP 作为二进制值的 <code>url</code> 返回执行 <code>method</code> 请求的结果。    可以提供可选的记录参数 <code>options</code> 以指定其他属性。记录可以包含以下字段:    <ul><li><code>Query</code> : 以编程方式将查询参数添加到 URL，无需担心转义。</li><li><code>ApiKeyName</code> : 如果目标站点具有 API 密钥的概念，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。凭据中提供了实际的密钥值。</li><li><code>Headers</code> : 将此值指定为记录将向 HTTP 请求提供其他标头。</li><li><code>Timeout</code> : 如果将此值指定为持续时间，则将更改 HTTP 请求的超时时间。默认值为 100 秒。</li><li><code>ExcludedFromCacheKey</code> : 如果将此值指定为列表，则将排除这些 HTTP 标头键，使其不作为用于缓存数据的计算的一部分。</li><li><code>IsRetry</code> : 将此逻辑值指定为 true 将在提取数据时忽略缓存中的所有现有响应。</li><li><code>ManualStatusHandling</code> : 如果将此值指定为列表，将阻止对其响应具有这些状态代码之一的 HTTP 请求进行任何内置处理。</li><li><code>RelativePath</code> : 如果将此值指定为文本，则会在发出请求之前将其追加到基 URL。</li><li><code>Content</code> : 指定此值将导致其内容成为 HTTP 请求的正文。</li></ul>    <br />    请注意，在大多数上下文中禁用此函数。请考虑改用 Web.Contents 或 Web.Headers。    


## Examples

### Example #1 
对必应执行 GET 请求。
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
