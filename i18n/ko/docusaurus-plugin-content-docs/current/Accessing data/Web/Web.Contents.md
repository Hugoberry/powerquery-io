---
title: Web.Contents
---

# Web.Contents


## Description

URL에서 다운로드된 콘텐츠를 이진 형식으로 반환합니다.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

<code>url</code>에서 다운로드한 콘텐츠를 이진으로 반환합니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수 <code>options</code>을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.   <ul><li><code>Query</code> : 이스케이프에 신경 쓰지 않고 프로그래밍 방식으로 URL에 쿼리 매개 변수를 추가합니다.</li><li><code>ApiKeyName</code> : 대상 사이트에 API 키 개념이 적용되어 있으면 이 매개 변수를 사용하여 URL에서 사용해야 하는 키 매개 변수의 이름(값 아님)을 지정할 수 있습니다. 실제 키 값은 자격 증명에 제공됩니다.</li><li><code>Headers</code> : 이 값을 레코드로 지정하면 HTTP 요청에 추가 헤더가 제공됩니다.</li><li><code>Timeout</code> : 이 값을 기간으로 지정하면 HTTP 요청의 제한 시간이 변경됩니다. 기본값은 100초입니다.</li><li><code>ExcludedFromCacheKey</code> : 이 값을 목록으로 지정하면 이러한 HTTP 헤더 키가 데이터 캐싱을 위한 계산에 포함되지 않습니다.</li><li><code>IsRetry</code> : 이 논리 값을 true로 지정하면 데이터를 가져올 때 캐시의 기존 응답이 무시됩니다.</li><li><code>ManualStatusHandling</code> : 이 값을 목록으로 지정하면 응답에 이러한 상태 코드 중 하나가 포함된 기본 제공 HTTP 요청을 처리할 수 없습니다.</li><li><code>RelativePath</code> : 이 값을 텍스트로 지정하면 요청하기 전에 기본 URL에 값이 추가됩니다.</li><li><code>Content</code> : 이 값을 지정하면 옵션 값을 POST의 내용으로 사용하여 GET에서 POST로의 웹 요청이 변경됩니다.</li></ul> HTTP 요청은 GET(콘텐츠가 지정되지 않은 경우) 또는 POST(콘텐츠가 있는 경우)로 이루어집니다. POST 요청은 익명으로만 이루어질 수 있습니다.    <br />    HTTP 응답의 헤더는 이진 결과의 메타데이터로 사용할 수 있습니다. 사용자 지정 데이터 커넥터 컨텍스트 외부에서는 보안상의 이유로 응답 헤더의 하위 집합만 사용할 수 있습니다.   


## Examples

### Example #1 
RelativePath 및 쿼리 옵션을 사용하여 &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt;의 콘텐츠를 검색합니다. 이러한 옵션을 사용하여 정적 기본 URL을 동적으로 쿼리할 수 있습니다.
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
URL에 대해 POST를 수행하고 바이너리 JSON 페이로드를 전달하고 응답을 JSON으로 구문 분석합니다.
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
인증 키를 쿼리 문자열의 일부로 받아들이는 보안 URL에 연결합니다. 보안 위험이 있는 M에서 비밀 키를 하드 코딩하는 대신,    M에서 이름(값 아님)을 지정하고, 웹 API 인증을 선택하고, 웹 API 자격 증명의 일부로 키 값을 입력하여 키를 안전하게 제공할 수 있습니다.    이러한 방식으로 사용될 경우, 다음 예제는 &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;에 대한 요청을 생성합니다.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
