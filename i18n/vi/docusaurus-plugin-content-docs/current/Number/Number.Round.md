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

Trả về kết quả làm tròn <code>number</code> đến số gần nhất. Nếu <code>number</code> là null, <code>Number.Round</code> sẽ trả về null.<br />      <br />      Theo mặc định, <code>number</code> được làm tròn đến số nguyên gần nhất và sự liên kết bị phá vỡ bằng cách làm tròn đến số chẵn gần nhất (sử dụng <code>RoundingMode.ToEven</code>, còn được biết đến là "làm tròn kiểu người làm ngân hàng").<br />      <br />      Tuy nhiên, những cài đặt mặc định này có thể được ghi đè thông qua các tham số tùy chọn sau.      <ul>        <li><code>digits</code>: Khiến <code>number</code> được làm tròn đến số lượng chữ số thập phân chỉ định.</li>        <li><code>roundingMode</code>: Ghi đè hành vi phá vỡ liên kết mặc định khi <code>number</code> ở điểm giữa giữa hai giá trị được làm tròn tiềm năng      (tham khảo <code>RoundingMode.Type</code> để biết các giá trị khả thi).</li>      </ul>


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
