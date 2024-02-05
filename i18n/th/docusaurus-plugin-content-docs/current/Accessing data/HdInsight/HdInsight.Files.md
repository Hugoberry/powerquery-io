---
title: HdInsight.Files
---

# HdInsight.Files


## Description

ส่งกลับตารางที่มีคุณสมบัติและเนื้อหาของ Blob ซึ่งพบในคอนเทนเนอร์ที่ระบุจากที่เก็บข้อมูล Azure


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

ส่งกลับตารางที่มีแถวสำหรับแฟ้ม Blob แต่ละแฟ้ม ซึ่งพบได้ที่ URL ของคอนเทนเนอร์ <code>account</code> จากที่เก็บข้อมูล Azure แต่ละแถวมีคุณสมบัติของแฟ้มและลิงก์ไปยังเนื้อหาของแฟ้ม



## Category
Accessing data
