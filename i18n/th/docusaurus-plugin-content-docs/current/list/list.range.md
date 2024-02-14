---
title: List.Range
---

# List.Range


ส่งกลับชุดย่อยของรายการที่เริ่มต้นที่ออฟเซต


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

ส่งกลับชุดย่อยของรายการที่เริ่มต้นที่ออฟเซต <code>list</code> พารามิเตอร์ <code>offset</code> ที่เลือกได้จะกำหนดจำนวนสูงสุดของรายการในชุดย่อย


## Examples

### Example #1 
ค้นหาเซตย่อยโดยเริ่มต้นที่ออฟเซต 6 ของรายการจำนวน 1 ถึง 10
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
ค้นหาเซตย่อยของความยาว 2 จากออฟเซต 6 จากรายการจำนวน 1 ถึง 10
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
