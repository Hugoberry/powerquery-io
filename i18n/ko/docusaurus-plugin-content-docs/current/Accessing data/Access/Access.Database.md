---
title: Access.Database
---

# Access.Database


## Description

Access 데이터베이스의 구조적 표현을 반환합니다.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Access 데이터베이스의 구조적 표현 <code>database</code>을(를) 반환합니다. 선택적 레코드 매개 변수 <code>options</code>이(가) 다음 옵션을 제어하기 위해 지정될 수 있습니다.    <ul><li><code>CreateNavigationProperties</code> : 반환된 값에서 탐색 속성을 생성할지 여부를 설정하는 논리(true/false)입니다(기본값은 false임).</li><li><code>NavigationPropertyNameGenerator</code> : 탐색 속성의 이름을 만드는 데 사용되는 함수입니다.</li></ul>    예를 들어, 레코드 매개 변수는 [option1 = value1, option2 = value2...] 형식으로 지정됩니다.



## Category
Accessing data
