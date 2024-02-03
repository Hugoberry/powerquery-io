---
title: Pdf.Tables
---

# Pdf.Tables


## Description

PDF 파일에 있는 테이블을 반환합니다.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

<code>pdf</code>에서 테이블을 반환합니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 제공하여 추가 속성을 지정할 수 있습니다. 레코드에는 다음 필드가 포함될 수 있습니다.    <ul><li><code>Implementation</code> : 테이블을 식별할 때 사용할 알고리즘의 버전입니다. 이전 버전은 이전 쿼리가 알고리즘 업데이트로 인해 손상되는 것을 방지하기 위해 이전 버전과의 호환성을 위해서만 사용할 수 있습니다. 최신 버전은 항상 최상의 결과를 제공해야 합니다. 유효한 값은 &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; 또는 null입니다.</li><li><code>StartPage</code> : 검사할 페이지 범위에서 첫 번째 페이지를 지정합니다. 기본값은 1입니다.</li><li><code>EndPage</code> : 검사할 페이지 범위에서 마지막 페이지를 지정합니다. 기본값은 문서의 마지막 페이지입니다.</li><li><code>MultiPageTables</code> : 연속한 페이지의 유사한 테이블을 단일 테이블로 자동으로 결합할지 여부를 제어합니다. 기본값은 True입니다.</li><li><code>EnforceBorderLines</code> : 테두리 선을 항상 셀 경계로 적용할지(True일 경우) 또는 셀 경계를 결정하기 위한 많은 힌트 중 하나로 사용할지(False일 경우)를 제어합니다. 기본값은 False입니다.</li></ul>    


## Examples

### Example #1 
sample.pdf에 포함된 테이블을 반환합니다.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
데이터 액세스
