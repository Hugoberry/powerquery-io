---
title: DocumentDB.Contents
---

# DocumentDB.Contents


ป้อน URL ของบัญชี Azure Cosmos DB


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางของฐานข้อมูล Azure Cosmos DB ที่ `url` หากมีการระบุ `database` จะทำการส่งกลับตารางของคอลเลกชันแทน นอกจากนี้ หากระบุเขตข้อมูล `Query` ในเรกคอร์ด `options` จะทำการส่งกลับผลลัพธ์ของคิวรีที่ดำเนินการบนฐานข้อมูลและ/หรือคอลเลกชันที่ระบุ


