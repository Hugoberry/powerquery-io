---
title: Number.Sign
---

# Number.Sign


ส่งกลับ 1 ถ้าจำนวนเป็นบวก -1 ถ้าจำนวนเป็นลบ และ 0 ถ้าเป็นจำนวนศูนย์


## Syntax

```powerquery
Number.Sign(
    number as number
) as number
```


## Remarks

ส่งกลับ 1 ถ้า `number` เป็นจำนวนบวก -1 ถ้าจำนวนเป็นลบ และ 0 ถ้าเป็นจำนวนศูนย์ ถ้า `number` เป็น null `Number.Sign` จะส่งกลับ null


## Examples

### Example #1
ระบุค่าเครื่องหมายของ 182
```powerquery
Number.Sign(182)
```

Result: 
```powerquery
1
```


### Example #2
ระบุค่าเครื่องหมายของ -182
```powerquery
Number.Sign(-182)
```

Result: 
```powerquery
-1
```


### Example #3
ระบุค่าเครื่องหมายของ 0
```powerquery
Number.Sign(0)
```

Result: 
```powerquery
0
```




## Category
Number.Operations
