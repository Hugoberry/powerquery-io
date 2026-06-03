---
title: Number.Round
---

# Number.Round


Trả về số được làm tròn. Có thể chỉ định số lượng chữ số và chế độ làm tròn.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Trả về kết quả làm tròn `number` đến số gần nhất. Nếu `number` là null, `Number.Round` sẽ trả về null.  
  
Theo mặc định, `number` được làm tròn đến số nguyên gần nhất và sự liên kết bị phá vỡ bằng cách làm tròn đến số chẵn gần nhất (sử dụng `RoundingMode.ToEven`, còn được biết đến là "làm tròn kiểu người làm ngân hàng").  
  
Tuy nhiên, những cài đặt mặc định này có thể được ghi đè thông qua các tham số tùy chọn sau.

-   `digits`: Khiến `number` được làm tròn đến số lượng chữ số thập phân chỉ định.
-   `roundingMode`: Ghi đè hành vi phá vỡ liên kết mặc định khi `number` ở điểm giữa giữa hai giá trị được làm tròn tiềm năng (tham khảo `RoundingMode.Type` để biết các giá trị khả thi).


## Examples

### Example #1
Làm tròn 1,234 lên số nguyên gần nhất.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Làm tròn 1,56 lên số nguyên gần nhất.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Làm tròn 1,2345 lên hai vị trí thập phân.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Làm tròn 1,2345 lên ba vị trí thập phân (làm tròn lên).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Làm tròn 1,2345 lên ba vị trí thập phân (làm tròn xuống).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
