---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


## Description

레코드 열을 각각 값을 포함하는 여러 열로 확장합니다.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Details

입력 <code>table</code>의 레코드 <code>column</code>을(를) 사용하여 레코드의 각 필드에 대한 열을 하나씩 포함하는 테이블을 만듭니다. 선택적으로 <code>newColumnNames</code>을(를) 지정하여 새 테이블의 열 이름이 고유하도록 할 수 있습니다.    <ul>        <li><code>table</code>: 확장할 레코드 열이 있는 원래 테이블입니다. </li>        <li><code>column</code>: 확장할 열입니다.</li>        <li><code>fieldNames</code>: 테이블의 열로 확장할 필드 목록입니다.</li>        <li><code>newColumnNames</code>: 새 열에 지정할 열 이름의 목록입니다. 새 열 이름은 새 테이블의 열과 중복될 수 없습니다.</li>    </ul>


## Examples

### Example #1 
&lt;code&gt;(\{[a = [aa = 1, bb = 2, cc = 3], b = 2]})&lt;/code&gt; 테이블의 [a] 열을 &#34;aa&#34;, &#34;bb&#34; 및 &#34;cc&#34; 열로 확장합니다.
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
