---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Trả về kết quả làm tròn, số dương lên và số âm xuống. Số chữ số có thể được chỉ định.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Trả về kết quả làm tròn <code>number</code> dựa trên dấu của số. Hàm này sẽ làm tròn số dương lên và số âm xuống.    Nếu <code>digits</code> được chỉ định, <code>number</code> được làm tròn về <code>digits</code> số thập phân.  


## Examples

### Example #1 
Làm tròn số -1,2 cách xa số 0.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Làm tròn số 1,2 cách xa số 0.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Làm tròn số -1,234 về hai vị trí thập phân tính từ 0.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
