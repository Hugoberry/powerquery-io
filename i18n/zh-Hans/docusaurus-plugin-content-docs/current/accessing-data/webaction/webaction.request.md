---
title: WebAction.Request
---

# WebAction.Request


创建以下操作:实施后，将执行 HTTP 请求的结果作为二进制值返回。


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

创建一个操作，该操作在执行时，会以二进制值形式返回通过 HTTP 对 `url` 执行 `method` 请求的结果。 可以提供可选记录参数 `options` 以指定其他属性。记录可包含以下字段:

-   `Query` : 以编程方式将查询参数添加到 URL，无需担心转义。
-   `ApiKeyName` : 如果目标站点具有 API 密钥的概念，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。凭据中提供了实际的密钥值。
-   `Headers` : 将此值指定为记录将向 HTTP 请求提供其他标头。
-   `Timeout` : 如果将此值指定为持续时间，则将更改 HTTP 请求的超时时间。默认值为 100 秒。
-   `ExcludedFromCacheKey` : 如果将此值指定为列表，则将排除这些 HTTP 标头键，使其不作为用于缓存数据的计算的一部分。
-   `IsRetry` : 将此逻辑值指定为 true 将在提取数据时忽略缓存中的所有现有响应。
-   `ManualStatusHandling` : 如果将此值指定为列表，将阻止对其响应具有这些状态代码之一的 HTTP 请求进行任何内置处理。
-   `RelativePath` : 如果将此值指定为文本，则会在发出请求之前将其追加到基 URL。
-   `Content` : 指定此值将导致其内容成为 HTTP 请求的正文。

请注意，多数上下文中禁用此函数。请考虑改用 Web.Contents 或 Web.Headers。


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
