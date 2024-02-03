---
title: Folder.Files
---

# Folder.Files


## Description

지정된 폴더 및 하위 폴더에 있는 파일의 속성과 내용을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Details

폴더 <code>path</code>와(과) 모든 하위 폴더에서 찾은 각 파일에 대한 행을 포함하는 테이블을 반환합니다. 각 행에는 파일의 속성과 해당 콘텐츠에 대한 링크가 포함됩니다. <code>options</code> 매개 변수는 현재 내부용으로만 사용됩니다.



## Category
Accessing data
