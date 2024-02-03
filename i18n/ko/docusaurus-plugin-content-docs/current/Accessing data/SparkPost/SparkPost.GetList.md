---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

이 함수는 SparkPost API v1에서 제공하는 "Lists" 끝점을 호출하는 데 사용할 수 있습니다. 이 함수를 사용하여 SparkPost API를 호출할 때는 SparkPost API에는 엄격한 API 속도 제한이 있음을 염두에 두어야 합니다. SparkPost 서버에서 429 상태 코드가 반환되는 경우 속도 제한에 도달하여 추가 호출을 수행하려면 잠시 기다려야 합니다.


## Examples

### Example #1 
SparkPost API v1 &#34;Lists&#34; 엔드포인트 중 하나의 데이터로 채워진 단일 열이 있는 테이블을 반환합니다(자세한 내용은 SparkPost 설명서 참조).
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



