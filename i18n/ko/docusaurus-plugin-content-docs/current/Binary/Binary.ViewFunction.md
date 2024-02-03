---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Binary.View를 통해 보기에 정의된 핸들러가 가로챌 수 있는 함수를 만듭니다.


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

<code>Binary.View</code>를 통해 만든 보기에서 처리할 수 있는 <code>function</code>을(를) 토대로 보기 함수를 만듭니다.<br /><code>Binary.View</code>의 <code>OnInvoke</code> 처리기를 사용하면 보기 함수에 대한 처리기를 정의할 수 있습니다.<br />기본 제공 작업용 처리기와 마찬가지로, <code>OnInvoke</code> 처리기를 지정하지 않는 경우나 보기 함수를 처리하지 않는 경우 <code>function</code>이(가) 보기 위에 적용됩니다.<br /><code>Binary.View</code> 및 사용자 지정 보기 함수에 대한 자세한 설명을 확인하려면 게시된 Power Query 사용자 지정 커넥터 설명서를 참조하세요.<br />



## Category
Binary
