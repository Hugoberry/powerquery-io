---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Essbase 서버별로 그룹화된 Essbase 인스턴스에서 큐브를 반환합니다.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

APS 서버 <code>url</code>의 Essbase 인스턴스에서 Essbase 서버로 그룹화된 큐브 테이블을 반환합니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 지정하여 다음 옵션을 제어할 수 있습니다.    <ul><li><code>CommandTimeout</code> : 서버 쪽 쿼리를 취소하기 전에 실행할 수 있는 시간을 제어하는 기간입니다. 기본값은 10분입니다.</li></ul>



## Category
Accessing data
