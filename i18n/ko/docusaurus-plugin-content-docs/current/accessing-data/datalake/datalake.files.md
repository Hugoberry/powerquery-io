---
title: DataLake.Files
---

# DataLake.Files


Azure Data Lake Storage 계정의 URL을 입력합니다.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage Gen1의 `url`에서 찾은 각 파일에 대한 행을 포함하는 테이블을 반환합니다. 각 행에는 파일의 속성과 콘텐츠에 대한 링크가 포함되어 있습니다.


