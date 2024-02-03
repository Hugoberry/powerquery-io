---
title: Xml.Tables
---

# Xml.Tables


## Description

XML 문서의 콘텐츠를 플랫 테이블의 중첩 컬렉션으로 반환합니다.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Details

XML 문서의 콘텐츠를 플랫 테이블의 중첩 컬렉션으로 반환합니다.


## Examples

### Example #1 
로컬 xml 파일의 내용을 검색합니다.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data
