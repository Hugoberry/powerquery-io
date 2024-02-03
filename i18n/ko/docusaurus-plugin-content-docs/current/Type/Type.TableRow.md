---
title: Type.TableRow
---

# Type.TableRow


## Description

테이블 형식의 행 형식을 반환합니다.


## Syntax

```powerquery
Type.TableRow(
    table as type
) as type
```


## Details

지정된 테이블 형식의 행 형식을 반환합니다. 결과는 항상 레코드 형식입니다.


## Examples

### Example #1 
단순 테이블에 대한 행 형식 정보를 반환합니다.
```powerquery
let
    tableRowType = Type.TableRow(Value.Type(#table({"Column1"}, {})))
in
    Type.RecordFields(tableRowType)
```

Result: 
```powerquery
[Column1 = [Type = type any, Optional = false]]
```




## Category
Type
