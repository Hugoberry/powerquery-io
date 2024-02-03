---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

모든 키를 지정된 키 목록으로 바꾼 새 테이블 형식을 반환합니다.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

모든 키를 지정된 키 목록으로 바꾼 새 테이블 형식을 반환합니다.<br />    <br />    각 키는 다음 형식의 레코드를 사용하여 정의됩니다.    <ul>      <li>        <code>Columns</code>: 키를 정의하는 열 이름 목록      </li>      <li>        <code>Primary</code>: 키가 테이블의 기본 키이면 <code>true</code>, 그렇지 않으면 <code>false</code>를 반환      </li>    </ul>    지정된 키 목록의 유효성을 검사하여 기본 키가 하나 이상 정의되어 있지 않고 모든 키 열 이름이 테이블 유형에 존재하는지 확인합니다.    


## Examples

### Example #1 
테이블 형식의 키 정보를 대체합니다.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType, 
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2 
테이블 형식에 이전에 정의된 키 정보를 지웁니다.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
