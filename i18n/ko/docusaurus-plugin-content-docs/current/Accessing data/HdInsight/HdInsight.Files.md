---
title: HdInsight.Files
---

# HdInsight.Files


## Description

Azure 스토리지 자격 증명 모음에서 지정된 컨테이너에 있는 blob의 속성 및 내용을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

Azure 스토리지 자격 증명 모음에서 컨테이너 URL <code>account</code>에 있는 각 blob 파일에 대한 행을 포함하는 테이블을 반환합니다. 각 행에는 파일의 속성과 해당 내용에 대한 링크가 있습니다.



## Category
Accessing data
