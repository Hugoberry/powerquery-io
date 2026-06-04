---
title: Web.BrowserContents
---

# Web.BrowserContents


웹 브라우저에서 볼 때 지정된 URL에 대한 HTML을 반환합니다.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

웹 브라우저에서 본 지정된 `url`에 대한 HTML을 반환합니다. 추가 속성을 지정하기 위해 선택적 레코드 매개 변수인 `options`을(를) 제공할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.

-   `ApiKeyName`: 대상 사이트에 API 키의 개념이 있는 경우 이 매개 변수는 URL에서 사용해야 하는 키 매개 변수의 이름(값이 아님)을 지정하는 데 사용할 수 있습니다. 실제 키 값은 자격 증명에 제공됩니다.
-   `WaitFor`: 페이지가 로드되기를 기다리는 것 외에도 HTML을 다운로드하기 전에 대기할 조건을 지정합니다(항상 수행됨). 시간 제한 및/또는 선택기 필드를 포함하는 레코드일 수 있습니다. 시간 제한만 지정된 경우 함수는 HTML을 다운로드하기 전에 지정된 시간을 기다립니다. 선택기와 시간 제한이 모두 지정되고 페이지에 선택기가 존재하기 전에 시간 제한이 경과되면 오류가 발생합니다. 시간 제한 없이 선택기를 지정하면 기본 시간 제한인 30초가 적용됩니다.


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
Accessing data
