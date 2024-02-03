---
title: Web.Headers
---

# Web.Headers


## Description

URL에서 다운로드한 HTTP 헤더를 레코드 값으로 반환합니다.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

<code>url</code>에서 다운로드한 헤더를 레코드로 반환합니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수 <code>options</code>을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>Query</code> : 이스케이프에 신경 쓰지 않고 프로그래밍 방식으로 URL에 쿼리 매개 변수를 추가합니다.</li><li><code>ApiKeyName</code> : 대상 사이트에 API 키 개념이 적용되어 있으면 이 매개 변수를 사용하여 URL에서 사용해야 하는 키 매개 변수의 이름(값 아님)을 지정할 수 있습니다. 실제 키 값은 자격 증명에 제공됩니다.</li><li><code>Headers</code> : 이 값을 레코드로 지정하면 HTTP 요청에 추가 헤더가 제공됩니다.</li><li><code>Timeout</code> : 이 값을 기간으로 지정하면 HTTP 요청의 제한 시간이 변경됩니다. 기본값은 100초입니다.</li><li><code>ExcludedFromCacheKey</code> : 이 값을 목록으로 지정하면 이러한 HTTP 헤더 키가 데이터 캐싱을 위한 계산에 포함되지 않습니다.</li><li><code>IsRetry</code> : 이 논리 값을 true로 지정하면 데이터를 가져올 때 캐시의 기존 응답이 무시됩니다.</li><li><code>ManualStatusHandling</code> : 이 값을 목록으로 지정하면 응답에 이러한 상태 코드 중 하나가 포함된 기본 제공 HTTP 요청을 처리할 수 없습니다.</li><li><code>RelativePath</code> : 이 값을 텍스트로 지정하면 요청하기 전에 기본 URL에 값이 추가됩니다.</li></ul>   HEAD 메서드를 사용하여 HTTP 요청이 이루어집니다. 사용자 지정 데이터 커넥터 컨텍스트 외부에서는 응답 헤더의 하위 집합만 사용할 수 있습니다(보안상의 이유로).   


## Examples

### Example #1 
상대 경로 및 쿼리 옵션을 사용하여 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt;에 대한 HTTP 헤더를 검색합니다.
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
