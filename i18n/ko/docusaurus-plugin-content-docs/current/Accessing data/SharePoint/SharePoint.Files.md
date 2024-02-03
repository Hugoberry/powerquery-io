---
title: SharePoint.Files
---

# SharePoint.Files


## Description

SharePoint 사이트의 문서를 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

지정된 SharePoint 사이트 <code>url</code> 및 하위 폴더에 있는 각 문서에 대해 행을 하나씩 포함하는 테이블을 반환합니다. 각 행에는 폴더 또는 파일의 속성과 해당 내용에 대한 링크가 포함됩니다. <code>options</code>을(를) 지정하여 다음 옵션을 제어할 수 있습니다.    <ul><li><code>ApiVersion</code> : 이 사이트에 사용할 SharePoint API 버전을 지정하는 숫자(14 또는 15) 또는 텍스트 &quot;Auto&quot;입니다. 지정하지 않으면 API 버전 14가 사용됩니다. Auto를 지정하면 가능한 경우 서버 버전이 자동으로 검색되고 그렇지 않으면 버전이 14로 기본 설정됩니다. 영어 외의 언어로 되어 있는 SharePoint 사이트의 경우 버전 15 이상이 필요합니다.</li></ul>    



## Category
Accessing data
