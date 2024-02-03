---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


## Description

지정된 함수를 사용하여 열 이름을 변환합니다.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Details

지정된 <code>nameGenerator</code> 함수를 사용하여 열 이름을 변환합니다. 올바른 옵션:    <div>      <code>MaxLength</code>는 새 열 이름의 최대 길이를 지정합니다. 지정된 함수의 결과에 포함된 열 이름이 더 긴 경우 긴 이름이 잘립니다.    </div>    <div>      <code>Comparer</code>는 새 열 이름을 생성하는 동안 비교를 제어하는 데 사용됩니다. 비교자를 사용하여 대/소문자 비구분 비교 또는 컬처 및 로캘 인식 비교를 제공할 수 있습니다.    </div>    <div>      수식 언어에서는 다음과 같은 기본 제공 비교자를 사용할 수 있습니다.    </div>    <ul>      <li><code>Comparer.Ordinal</code>: 정확한 서수 비교를 수행하는 데 사용됨</li>      <li><code>Comparer.OrdinalIgnoreCase</code>: 정확한 대/소문자 비구분 서수 비교를 수행하는 데 사용됨</li>      <li> <code>Comparer.FromCulture</code>: 컬처 인식 비교를 수행하는 데 사용됨</li>    </ul>    


## Examples

### Example #1 
열 이름에서 &lt;code&gt;#(tab)&lt;/code&gt; 문자를 제거하세요.
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2 
열 이름을 변환하여 6자 길이의 대/소문자 비구분 이름을 생성하세요.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
