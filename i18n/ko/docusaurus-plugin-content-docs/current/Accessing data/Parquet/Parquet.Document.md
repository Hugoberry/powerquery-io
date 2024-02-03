---
title: Parquet.Document
---

# Parquet.Document


## Description

Parquet 문서의 내용을 테이블로 반환합니다.


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

Parquet 문서의 내용을 테이블로 반환합니다. 다음 옵션이 포함됩니다.
    <ul>
    <li> <code>TypeMapping</code>: 파일을 읽고 쓸 때 기본 형식 매핑을 제어하는 텍스트 값입니다. 기본값은 null이며 원래 형식에 최대한 충실도를 유지하려고 합니다. "Sql" 값은 SQL Server와 가장 잘 호환되는 결과를 생성합니다.</li>
    </ul>



## Category
데이터 액세스
