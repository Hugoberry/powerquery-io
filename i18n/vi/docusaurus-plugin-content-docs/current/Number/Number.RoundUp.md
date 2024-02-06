---
title: Number.RoundUp
---

# Number.RoundUp


Trả về số cao nhất đằng sau. Số chữ số có thể được chỉ định.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Trả về kết quả làm tròn <code>number</code> lên số nguyên cao nhất tiếp theo. Nếu <code>number</code> là null, hàm này sẽ trả về giá trị null.    Nếu <code>digits</code> được cung cấp, <code>number</code> sẽ được làm tròn đến số đã chỉ định của số thập phân.  


## Examples

### Example #1 
Làm tròn 1,234 lên số nguyên.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Làm tròn 1,999 lên số nguyên.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Làm tròn lên 1,234 về hai vị trí thập phân.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
