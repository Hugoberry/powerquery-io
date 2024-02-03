---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Trả về HTML cho URL được chỉ định, như được xem bởi trình duyệt web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Trả về HTML cho <code>url</code> được chỉ định khi được xem bằng trình duyệt web. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để xác định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:     <ul>        <li><code>ApiKeyName</code>: Nếu trang web đích có khái niệm về khóa API thì tham số này có thể được sử dụng để chỉ định tên (không phải giá trị) của tham số khóa phải được sử dụng trong URL. Giá trị khóa thực tế được cung cấp trong thông tin xác thực.</li>        <li><code>WaitFor</code>: Chỉ định điều kiện cần chờ trước khi tải xuống HTML, ngoài việc chờ tải trang (tùy chọn này luôn được thực hiện). Có thể là bản ghi có chứa các trường Thời gian chờ và/hoặc Bộ chọn. Nếu chỉ chỉ định trường Thời gian chờ, hàm sẽ chờ một khoảng thời gian đã chỉ định trước khi tải xuống HTML. Nếu chỉ định cả Bộ chọn và Thời gian chờ và Thời gian chờ đã hết trước khi Bộ chọn xuất hiện trên trang, lỗi sẽ bị loại bỏ. Nếu chỉ định Bộ chọn mà không có Thời gian chờ thì Thời gian chờ mặc định 30 giây sẽ được áp dụng.</li>      </ul>    


## Examples

### Example #1 
Trả về HTML cho https://microsoft.com.
```powerquery
Web.BrowserContents ("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Trả về HTML cho https://microsoft.com sau khi chờ trình chọn CSS xuất hiện.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Trả về HTML cho https://microsoft.com sau khi chờ mười giây.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Trả về HTML cho https://microsoft.com sau khi chờ trình chọn CSS xuất hiện sau tối đa 10 giây.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Truy cập vào dữ liệu
