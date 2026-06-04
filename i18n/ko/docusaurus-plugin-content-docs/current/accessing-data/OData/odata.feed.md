---
title: OData.Feed
---

# OData.Feed


OData Service에서 제공하는 OData 피드에 대한 테이블을 반환합니다.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

URI `serviceUri`, 헤더 `headers`에서 OData Service가 제공한 OData 피드 테이블을 반환합니다. 동시 연결을 사용할지 또는 선택적 레코드 매개 변수인 `options`을(를) 사용할지 여부를 지정하는 부울 값을 지정하여 다음 옵션을 제어할 수 있습니다.

-   `Query`: 프로그래밍 방식으로 이스케이프에 대해 걱정할 필요 없이 URL에 쿼리 매개 변수를 추가합니다.
-   `Headers`: 이 값을 레코드로 지정하면 HTTP 요청에 추가 헤더가 제공됩니다.
-   `ExcludedFromCacheKey`: 이 값을 목록으로 지정하면 이러한 HTTP 헤더 키가 데이터 캐싱 계산에 포함되지 않습니다.
-   `ApiKeyName`: 대상 사이트에 API 키의 개념이 있는 경우 이 매개 변수는 URL에서 사용해야 하는 키 매개 변수의 이름(값이 아님)을 지정하는 데 사용할 수 있습니다. 실제 키 값은 자격 증명에서 제공됩니다.
-   `Timeout`: 이 값을 기간으로 지정하면 HTTP 요청의 시간 제한이 변경됩니다. 기본값은 600초입니다.
-   `EnableBatch`: MaxUriLength가 초과된 경우 OData $batch 요청 생성을 허용할지 여부를 설정하는 논리(true/false)입니다(기본값은 false).
-   `MaxUriLength`: OData 서비스로 전송된 허용되는 URI의 최대 길이를 나타내는 숫자입니다. 초과 시 EnableBatch가 true면 OData $batch 엔드포인트에 요청되고, 그렇지 않으면 실패합니다(기본값 2048).
-   `Concurrent` : 논리(true/false)를 true로 설정하면 서비스에 대한 요청이 동시에 이루어집니다. false로 설정하면 요청이 순차적으로 이루어집니다. 지정하지 않으면 서비스의 AsynchronousRequestsSupported 주석에 의해 값이 결정됩니다. 서비스에서 AsynchronousRequestsSupported가 지원되는지 여부를 지정하지 않은 경우 요청은 순차적으로 이루어집니다.
-   `ODataVersion`: 이 OData 서비스에 사용할 OData 프로토콜 버전을 지정하는 숫자(3 또는 4)입니다. 지정하지 않으면 지원되는 모든 버전이 요청됩니다. 서비스 버전은 서비스에서 반환되는 OData-Version 헤더에 의해 결정됩니다.
-   `FunctionOverloads` : 논리값(true/false)을 true로 설정하면 함수 가져오기 오버로드가 탐색기에서 개별 항목으로 나열되고, false로 설정하면 함수 가져오기 오버로드가 탐색기에서 하나의 통합 함수로 나열됩니다. V3의 기본값: false. V4의 기본값: true.
-   `MoreColumns` : 논리값(true/false)을 true로 설정하면 개방형 형식 및 다형 형식이 포함된 각각의 엔터티 피드에 "기타 열" 열이 추가됩니다. 여기에는 기본 형식에서 선언되지 않은 필드가 포함됩니다. false이면 이 필드가 없습니다. 기본값은 false입니다.
-   `IncludeAnnotations`: "\*"를 와일드카드로 포함할 네임스페이스 정규화된 용어 이름 또는 패턴의 쉼표로 구분된 목록입니다. 기본적으로 주석은 포함되지 않습니다.
-   `IncludeMetadataAnnotations`: "\*"를 와일드카드로 사용하여 메타데이터 문서 요청에 포함할 네임스페이스 정규화된 용어 이름 또는 패턴의 쉼표로 구분된 목록입니다. 기본적으로 IncludeAnnotations와 동일한 주석이 포함됩니다.
-   `OmitValues`: OData 서비스가 응답에서 특정 값을 쓰지 않도록 합니다. 서비스에서 승인되는 경우 이러한 값을 생략된 필드에서 유추합니다. 옵션에는 다음이 포함됩니다.
    -   `ODataOmitValues.Nulls`: OData 서비스에서 null 값을 생략하도록 허용합니다.
-   `Implementation`: 사용할 OData 커넥터의 구현을 지정합니다. 유효한 값은 "2.0" 또는 Null입니다.


## Examples

### Example #1
TripPin OData 서비스에 연결합니다.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
