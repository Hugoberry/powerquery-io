---
title: OData.Feed
---

# OData.Feed


返回 OData 服务提供的 OData 数据源表。


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

从 URI <code>serviceUri</code>，标头 <code>headers</code> 返回由 OData 服务提供的 OData 源表。可以指定指明是使用并发连接还是使用可选记录参数 <code>options</code> 的布尔值来控制以下选项:    <ul>    <li><code>Query</code>: 以编程方式向 URL 添加查询参数，而无需担心转义。</li>    <li> <code>标头</code>: 将此值指定为记录将向 HTTP 请求提供附加标头。</li>    <li> <code>ExcludedFromCacheKey</code>: 将此值指定为列表将从缓存数据计算中排除这些 HTTP 标头密钥。</li>    <li> <code>ApiKeyName</code>: 如果目标网站具有 API 密钥表示法，则此参数可用于指定必须在 URL 中使用的密钥参数的名称(而不是值)。实际密钥值在凭据中提供。</li>    <li> <code>Timeout</code>: 将此值指定为持续时间将更改 HTTP 请求的超时。默认值为 600 秒。</li>    <li> <code>EnableBatch</code>: 逻辑值(true/false)，用于设置是否允许在超出 MaxUriLength 时生成 OData $batch 请求(默认值为 false)。</li>    <li> <code>MaxUriLength</code>: 指示发送到 OData 服务的允许 URI 最大长度的数字。如果超出且 EnableBatch 为 true，则将向 OData $batch 终结点发送请求，否则将会失败(默认值为 2048)。</li>    <li> <code>Concurrent</code>: 逻辑值(true/false)，如果设置为 true，则将并发提出向服务的请求。如果设置为 false，则将按顺序发出请求。如果未指定，则值由服务的 AsynchronousRequestsSupported 注释确定。如果服务未指定是否支持 AsynchronousRequestsSupported，则将按顺序发出请求。</li>    <li> <code>ODataVersion</code>: 数字(3 或 4)，用于指定此 OData 服务使用的 OData 协议版本。如果未指定，将请求所有受支持的版本。服务版本由服务返回的 OData-Version 标头确定。</li>    <li> <code>FunctionOverloads</code>: 逻辑值(true/false)，如果设置为 true，函数导入过载以单独条目形式在导航器中列出。如果设置为 false，函数导入过载将以一个联合函数的形式在导航器中列出。V3 的默认值为 false。V4 的默认值为 true。</li>    <li> <code>MoreColumns</code>:逻辑值(true/false)，如果设置为 true，则将“更多列”列添加到每个包含开放式类型和多变类型的实体源。这将包含基类型中未声明的字段。如果设置为 false，则此字段不存在。默认为 false。</li>    <li> <code>IncludeAnnotations</code>: 要包含的命名空间限定术语名称或模式的逗号分隔列表(使用 “\*” 作为通配符)。默认情况下，不包括任何注释。</li>    <li> <code>IncludeMetadataAnnotations</code>: 要包含在元数据文档请求上的命名空间限定术语名称或模式的逗号分隔列表(使用 “\*” 作为通配符)。默认情况下，包括与 IncludeAnnotations 相同的注释。</li>    <li> <code>OmitValues</code>: 允许 OData 服务避免在响应中写出特定值。如果已由服务确认，我们将通过忽略的字段推断这些值。选项包括:      <ul>      <li><code>ODataOmitValues.Nulls</code>: 允许 OData 服务忽略 null 值。</li>      </ul>    </li>    <li> <code>Implementation</code>: 指定要使用的 OData 连接器实现。有效值为 “2.0” 或 NULL。</li>    </ul>


## Examples

### Example #1 
连接到 TripPin OData 服务。
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
