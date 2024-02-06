---
title: Number.RoundDown
---

# Number.RoundDown


Trả về số cao nhất đằng trước. Số chữ số có thể được chỉ định.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Trả về kết quả làm tròn <code>number</code> xuống số nguyên cao nhất đằng trước. Nếu <code>number</code> là null, hàm này sẽ trả về giá trị null.    Nếu <code>digits</code> được cung cấp, <code>number</code> sẽ được làm tròn đến số đã chỉ định của số thập phân.  


## Examples

### Example #1 
Làm tròn 1,234 xuống số nguyên.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Làm tròn 1,999 xuống số nguyên.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Làm tròn xuống 1,999 về hai vị trí thập phân.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
