---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Trả về kết quả làm tròn số dương xuống và số âm lên. Số chữ số có thể được chỉ định.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Trả về kết quả làm tròn `number` dựa trên dấu của số. Hàm này sẽ làm tròn số dương xuống và số âm lên. Nếu `digits` được chỉ định, `number` được làm tròn về `digits` số thập phân.


## Examples

### Example #1
Làm tròn số -1,2 tiến tới 0.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Làm tròn số 1,2 tiến tới 0.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Làm tròn số -1,234 về hai vị trí thập phân về phía 0.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
