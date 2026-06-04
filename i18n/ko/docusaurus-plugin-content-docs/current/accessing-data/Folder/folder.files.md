---
title: Folder.Files
---

# Folder.Files


지정된 폴더 및 하위 폴더에 있는 파일의 속성과 내용을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

지정한 폴더와 모든 하위 폴더에서 찾은 각 파일에 대한 행을 포함하는 테이블을 반환합니다.

-   `path`: 파일을 검색할 폴더의 경로입니다. 제공된 폴더 경로는 올바른 절대 경로여야 합니다.
-   `options`: (선택 사항) 이 매개변수는 현재 내부 용도로만 사용됩니다.

반환된 테이블의 각 행에는 파일의 속성과 해당 콘텐츠의 링크가 포함되어 있습니다.


## Examples

### Example #1
C:\\test-examples\\example-folder 및 모든 하위 폴더에 있는 파일이 포함된 테이블을 반환합니다.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
