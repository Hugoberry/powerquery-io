---
title: Folder.Contents
---

# Folder.Contents


## Description

지정된 폴더에 있는 파일 및 폴더의 속성과 내용을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

폴더 <code>path</code>에 있는 각 폴더 및 파일에 대한 행을 포함하는 테이블을 반환합니다. 각 행에는 폴더 또는 파일의 속성과 해당 내용에 대한 링크가 포함됩니다. <code>options</code> 매개 변수는 현재 내부 전용입니다.



## Category
Accessing data
