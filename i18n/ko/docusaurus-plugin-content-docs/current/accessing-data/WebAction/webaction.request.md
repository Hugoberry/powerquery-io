---
title: WebAction.Request
---

# WebAction.Request


실행 시 HTTP 요청을 수행한 결과를 이진값으로 반환할 작업을 만듭니다.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

실행 시 HTTP를 이진 값으로 사용하여 `method`에 대한 `url` 요청을 수행한 결과를 반환하는 작업을 만듭니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수 `options`을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.

-   `Query` : 이스케이프에 신경 쓰지 않고 프로그래밍 방식으로 URL에 쿼리 매개 변수를 추가합니다.
-   `ApiKeyName` : 대상 사이트에 API 키 개념이 적용되어 있으면 이 매개 변수를 사용하여 URL에서 사용해야 하는 키 매개 변수의 이름(값 아님)을 지정할 수 있습니다. 실제 키 값은 자격 증명에 제공됩니다.
-   `Headers` : 이 값을 레코드로 지정하면 HTTP 요청에 추가 헤더가 제공됩니다.
-   `Timeout` : 이 값을 기간으로 지정하면 HTTP 요청의 제한 시간이 변경됩니다. 기본값은 100초입니다.
-   `ExcludedFromCacheKey` : 이 값을 목록으로 지정하면 이러한 HTTP 헤더 키가 데이터 캐싱을 위한 계산에 포함되지 않습니다.
-   `IsRetry` : 이 논리 값을 true로 지정하면 데이터를 가져올 때 캐시의 기존 응답이 무시됩니다.
-   `ManualStatusHandling` : 이 값을 목록으로 지정하면 응답에 이러한 상태 코드 중 하나가 포함된 기본 제공 HTTP 요청을 처리할 수 없습니다.
-   `RelativePath` : 이 값을 텍스트로 지정하면 요청하기 전에 기본 URL에 값이 추가됩니다.
-   `Content` : 이 값을 지정하면 해당 내용이 HTTP 요청의 본문이 됩니다.

이 기능은 대부분의 컨텍스트에서 사용할 수 없습니다. 대신 Web.Contents 또는 Web.Headers를 사용하는 것을 고려하세요.


## Examples

### Example #1
Bing에 대해 GET 요청을 수행합니다.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
