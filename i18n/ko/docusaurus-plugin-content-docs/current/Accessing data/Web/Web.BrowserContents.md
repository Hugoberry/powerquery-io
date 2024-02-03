---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

웹 브라우저에서 볼 때 지정된 URL에 대한 HTML을 반환합니다.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

지정한 <code>url</code>에 대한 HTML을 웹 브라우저에 표시되는 대로 반환합니다. 선택적 레코드 매개 변수인 <code>options</code>을(를) 사용하여 추가 속성을 지정할 수도 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.     <ul>        <li><code>ApiKeyName</code>: 대상 사이트에 API 키 개념이 있는 경우 이 매개 변수를 사용하여 URL에서 사용할 키 매개 변수의 이름(값이 아님)을 지정할 수 있습니다. 실제 키 값은 자격 증명에 제공됩니다.</li>        <li><code>WaitFor</code>: 페이지가 로드(항상 완료)될 때까지 기다리는 것 외에 HTML을 다운로드하기 전에 기다릴 조건을 지정합니다. Timeout 및/또는 Selector 필드가 포함된 레코드일 수 있습니다. Timeout만 지정하는 경우 함수는 HTML을 다운로드하기 전에 지정된 시간 동안 기다립니다. Selector와 Timeout을 모두 지정한 상태에서 페이지에서 Selector가 존재하기 전에 Timeout이 경과되면 오류가 발생합니다. Selector를 Timeout 없이 지정하는 경우 Timeout 기본값인 30초가 적용됩니다.</li>      </ul>    


## Examples

### Example #1 
https://microsoft.com에 대한 HTML을 반환합니다.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
CSS 선택기가 종료될 때까지 기다린 후 https://microsoft.com에 대한 HTML을 반환합니다.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
10초 동안 기다린 후 https://microsoft.com에 대한 HTML을 반환합니다.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
CSS 선택기가 종료될 때까지 10초 동안 기다린 후 https://microsoft.com에 대한 HTML을 반환합니다.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
데이터 액세스
