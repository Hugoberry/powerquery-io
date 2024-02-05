---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

ส่งกลับตารางของฐานข้อมูล Azure Cosmos DB ที่ <code>url</code> หากมีการระบุ <code>database</code> จะทำการส่งกลับตารางของคอลเลกชันแทน นอกจากนี้ หากระบุเขตข้อมูล <code>Query</code> ในเรกคอร์ด <code>options</code> จะทำการส่งกลับผลลัพธ์ของคิวรีที่ดำเนินการบนฐานข้อมูลและ/หรือคอลเลกชันที่ระบุ


