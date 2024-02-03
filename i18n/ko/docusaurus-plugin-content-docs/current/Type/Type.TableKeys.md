---
title: Type.TableKeys
---

# Type.TableKeys


## Description

지정된 테이블 형식에 대한 키 목록(비어 있을 수 있음)을 반환합니다.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Details

지정된 테이블 형식에 대한 키 목록(비어 있을 수 있음)을 반환합니다.<br />    <br />    각 키는 다음 형식의 레코드를 사용하여 정의됩니다.    <ul>      <li>        <code>Columns</code>: 키를 정의하는 열 이름 목록      </li>      <li>        <code>Primary</code>: 키가 테이블의 기본 키이면 <code>true</code>, 그렇지 않으면 <code>false</code>를 반환      </li>    </ul>    


## Examples

### Example #1 
테이블 형식에 대한 키 정보를 반환합니다.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
