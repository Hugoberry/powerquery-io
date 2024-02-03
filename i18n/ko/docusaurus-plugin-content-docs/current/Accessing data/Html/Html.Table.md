---
title: Html.Table
---

# Html.Table


## Description

제공된 HTML에 대해 지정된 CSS 선택기를 실행한 결과가 포함된 테이블을 반환합니다.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Details

제공된 <code>html</code>에 대해 지정한 CSS 선택기를 실행한 결과가 포함된 테이블을 반환합니다. 선택적 레코드 매개 변수 <code>options</code>을(를) 제공하여 추가 속성을 지정할 수도 있습니다. 레코드에는 다음과 같은 필드가 포함될 수 있습니다.    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
예제 html 텍스트 값에서 테이블을 반환합니다.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
예제 html 텍스트 값에서 모든 href를 추출합니다.
```powerquery
Html.Table("<a href=""/test.html"">테스트</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
데이터 액세스
