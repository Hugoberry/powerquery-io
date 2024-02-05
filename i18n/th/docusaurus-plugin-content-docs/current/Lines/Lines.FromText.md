---
title: Lines.FromText
---

# Lines.FromText


## Description

แปลงค่าข้อความเป็นรายการค่าข้อความที่แบ่งด้วยตัวแบ่งบรรทัด หาก includeLineSeparators เป็นจริง จะมีการรวมอักขระตัวแบ่งบรรทัดในข้อความ


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

แปลงค่าข้อความเป็นรายการค่าข้อความโดยแยกที่ตัวแบ่งบรรทัด หาก includeLineSeparators เป็นจริง จะมีการรวมอักขระตัวแบ่งบรรทัดไว้ในข้อความ        <div>          <ul>            <li><code>QuoteStyle.None:</code> (ค่าเริ่มต้น) ไม่ต้องปิดข้อความด้วยเครื่องหมายคำพูด</li>            <li><code>QuoteStyle.Csv:</code> ปิดข้อความด้วยเครื่องหมายคำพูดตาม Csv จะมีการใช้อักขระเครื่องหมายคำพูดคู่เพื่อกำหนดเขต และจะมีการใช้อักขระเครื่องหมายคำพูดคู่สองอันเพื่อระบุอักขระเครื่องหมายคำพูดคู่เดี่ยวภายในเขต </li>          </ul>        </div>    



## Category
Lines
