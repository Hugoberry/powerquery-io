---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


ส่งกลับฟังก์ชันตัวเปรียบเทียบแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็กซึ่งใช้กฎเลขลำดับในการเปรียบเทียบค่า


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

ส่งกลับฟังก์ชันตัวเปรียบเทียบที่ไม่ตรงตามตัวพิมพ์ใหญ่-เล็กที่ใช้กฎเลขลําดับเพื่อเปรียบเทียบค่าที่ระบุ `x` และ `y`  
  
ฟังก์ชันตัวเปรียบเทียบยอมรับสองอาร์กิวเมนต์และส่งกลับ -1, 0 หรือ 1 โดยขึ้นอยู่กับว่าค่าแรกน้อยกว่า เท่ากับ หรือมากกว่าค่าที่สอง


## Examples

### Example #1
การใช้กฎเลขลำดับแบบไม่เทียบตรงตามตัวพิมพ์ใหญ่-เล็ก เปรียบเทียบ "Abc" กับ "abc" หมายหตุ "Abc" จะมีค่าน้อยกว่า "abc" โดยใช้ `Comparer.Ordinal`
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
