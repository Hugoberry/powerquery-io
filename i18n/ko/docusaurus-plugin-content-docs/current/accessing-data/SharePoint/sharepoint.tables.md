---
title: SharePoint.Tables
---

# SharePoint.Tables


SharePoint 목록의 내용을 포함하는 테이블을 반환합니다.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

지정된 SharePoint 목록 `url`에 있는 각 목록 항목에 대해 행을 하나씩 포함하는 테이블을 반환합니다. 각 행에는 목록의 속성이 포함됩니다. `options`을(를) 지정하여 다음 옵션을 제어할 수 있습니다.

-   `ApiVersion` : 이 사이트에 사용할 SharePoint API 버전을 지정하는 숫자(14 또는 15) 또는 텍스트 "Auto"입니다. 지정하지 않으면 API 버전 14가 사용됩니다. Auto를 지정하면 가능한 경우 서버 버전이 자동으로 검색되고 그렇지 않으면 버전이 14로 기본 설정됩니다. 영어 외의 언어로 되어 있는 SharePoint 사이트의 경우 버전 15 이상이 필요합니다.
-   `Implementation` : 선택적 항목. 사용할 SharePoint 커넥터 버전을 지정합니다. 허용되는 값은 "2.0" 또는 null입니다. 값이 "2.0"이면 SharePoint 커넥터의 2.0 구현이 사용됩니다. 값이 null이면 SharePoint 커넥터의 원래 구현이 사용됩니다.
-   `ViewMode` : 선택적 항목. 이 옵션은 구현 2.0에만 유효합니다. 허용되는 값은 "모두" 및 "기본값"입니다. 값을 지정하지 않으면 값이 "All"로 설정됩니다. "모두"를 지정하면 보기에 모든 사용자 생성 및 시스템 정의 열이 포함됩니다. "기본값"이 지정되면 보기는 사용자가 설정에서 기본값으로 설정한 보기에서 온라인으로 목록을 볼 때 사용자가 보는 것과 일치합니다. 사용자가 기본 보기를 편집하여 사용자 생성 열 또는 시스템 정의 열을 추가 또는 제거하거나 새 보기를 생성하고 기본값으로 설정하면 이러한 변경 내용이 커넥터를 통해 전파됩니다.
-   `DisableAppendNoteColumns` : 커넥터가 메모 열에 별도의 엔드포인트를 사용하지 못하도록 합니다.



## Category
Accessing data
