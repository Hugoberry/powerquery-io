---
title: Html.Table
---

# Html.Table


ส่งกลับตารางที่มีผลลัพธ์ของการเรียกใช้ตัวเลือก CSS ที่ระบุกับ HTML ที่ให้มา


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่ประกอบด้วยผลลัพธ์ของการเรียกใช้ตัวเลือก CSS ที่ระบุกับ <code>html</code> ที่ให้มา พารามิเตอร์ระเบียนทางเลือก <code>options</code> อาจจัดทำขึ้นเพื่อระบุคุณสมบัติเพิ่มเติม ระเบียนสามารถประกอบด้วยเขตข้อมูลต่อไปนี้:    <ul><li><code>RowSelector</code></li></ul>    


## Examples

### Example #1 
ส่งกลับตารางจากค่าข้อความ html ตัวอย่าง
```powerquery
Html.Table("<div class=""name"">เจตริณ</div><span>ผู้จัดการ</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#ตาราง({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2 
แยก href ทั้งหมดจากค่าข้อความ html ตัวอย่าง
```powerquery
Html.Table("<a href=""/test.html"">ทดสอบ</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
การเข้าถึงข้อมูล
