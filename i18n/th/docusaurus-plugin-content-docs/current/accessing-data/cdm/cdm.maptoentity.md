---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


ส่งกลับตารางที่มีคอลัมน์ซึ่งแมปกับแอตทริบิวต์ของเอนทิตีใน Common Data Model รวมถึงชนิดข้อมูล


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Remarks

ส่งกลับตารางที่มีคอลัมน์ซึ่งแมปกับแอตทริบิวต์ของเอนทิตีใน Common Data Model รวมถึงชนิดข้อมูล คอลัมน์จากข้อกำหนดของเอนทิตีจะถูกเพิ่มถ้าไม่ได้แมป และคอลัมน์ใดๆ ที่ไม่ได้แมปจะถูกลบออก


