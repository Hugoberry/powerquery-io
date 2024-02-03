---
title: SapBusinessWarehouse.Cubes
---

# SapBusinessWarehouse.Cubes


## Description

SAP Business Warehouse 시스템에서 InfoArea로 그룹화된 InfoCube 및 쿼리를 반환합니다.


## Syntax

```powerquery
SapBusinessWarehouse.Cubes(
    server as text,
    systemNumberOrSystemId as text,
    clientId as text,
    optional optionsOrLogonGroup as any,
    optional options as record
) as table
```


## Details

시스템 번호 <code>systemNumberOrSystemId</code> 및 클라이언트 ID <code>clientId</code>이(가) 있는 서버 <code>server</code>의 SAP Business Warehouse 인스턴스에서 InfoArea로 그룹화된 쿼리 및 InfoCubes의 테이블을 반환합니다. 선택적 레코드 매개 변수 <code>optionsOrLogonGroup</code>이(가) 다음 옵션을 제어하기 위해 지정될 수 있습니다.        



## Category
Accessing data
