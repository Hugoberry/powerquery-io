---
title: OData.Feed
---

# OData.Feed


## Description

Trả về một bảng chứa các nguồn cấp OData do dịch vụ OData cung cấp.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Trả về một bảng các nguồn cấp dữ liệu OData do dịch vụ OData cung cấp từ URI <code>serviceUri</code>, tiêu đề <code>headers</code>. Một giá trị boolean chỉ định sẽ sử dụng kết nối đồng thời hay tham số bản ghi tùy chọn, <code>options</code>, có thể được chỉ định để kiểm soát các tùy chọn sau:    <ul>    <li><code>Query</code>: Thêm tham số truy vấn vào URL theo quy trình mà không phải lo thoát ra. </li>    <li> <code>Headers</code> : Chỉ định giá trị này làm bản ghi sẽ cung cấp tiêu đề bổ sung cho yêu cầu HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Chỉ định giá trị này làm danh sách sẽ loại trừ các khóa tiêu đề HTTP này khỏi việc tính toán để đưa dữ liệu vào bộ đệm ẩn.</li>    <li> <code>ApiKeyName</code> : Nếu trang đích có khái niệm nào đó về khóa API thì có thể sử dụng tham số này để chỉ định tên (không phải giá trị) của tham số khóa phải sử dụng trong URL. Giá trị khóa thực được cung cấp trong thông tin xác thực.</li>    <li> <code>Timeout</code> : Chỉ định giá trị này làm khoảng thời gian sẽ thay đổi thời gian chờ đối với yêu cầu HTTP. Giá trị mặc định là 600 giây.</li>    <li> <code>EnableBatch</code> : Một giá trị logic (true/false) đặt có cho phép tạo yêu cầu OData $batch hay không nếu vượt quá MaxUriLength (mặc định là false).</li>    <li> <code>MaxUriLength</code> : Một số cho biết độ dài tối đa của URI được phép gửi đến dịch vụ OData. Nếu vượt quá và EnableBatch là true thì yêu cầu sẽ được thực hiện cho điểm cuối OData $batch. Nếu không, sẽ không thực hiện được (mặc định là 2048).</li>    <li> <code>Concurrent</code> : Một logic (true/false) khi được đặt thành true, các yêu cầu tới dịch vụ sẽ được tạo đồng thời. Khi được đặt thành false, các yêu cầu sẽ được tạo theo trình tự. Khi chưa được chỉ định, giá trị này sẽ do chú thích AsynchronousRequestsSupported của dịch vụ xác định. Nếu dịch vụ không chỉ định AsynchronousRequestsSupported có được hỗ trợ hay không, yêu cầu sẽ được tạo theo trình tự.</li>    <li> <code>ODataVersion</code> : Một số (3 hoặc 4) chỉ định phiên bản giao thức OData để sử dụng cho dịch vụ OData này. Khi chưa được chỉ định, sẽ yêu cầu tất cả các phiên bản được hỗ trợ. Tiêu đề OData-Version do dịch vụ trả về sẽ xác định phiên bản dịch vụ.</li>    <li> <code>FunctionOverloads</code> : Một giá trị logic (true/false) khi được đặt thành true, các quá tải nhập chức năng sẽ được liệt kê trong bộ điều hướng dưới dạng các mục tách biệt, còn khi được đặt thành false, các quá tải nhập chức năng sẽ được liệt kê dưới dạng chức năng kết hợp trong bộ điều hướng. Giá trị mặc định cho V3: false. Giá trị mặc định cho V4: true.</li>    <li> <code>MoreColumns</code> : Một giá trị logic (true/false) khi được đặt thành true sẽ thêm cột "Cột khác" vào từng nguồn cấp dữ liệu thực thể có chứa các loại đang mở và loại đa hình. Loại này sẽ chứa các trường chưa được nêu trong loại cơ sở. Khi được đặt thành false, trường này không hiển thị. Giá trị mặc định là false.</li>    <li> <code>IncludeAnnotations</code> : Danh sách được phân tách bằng dấu phẩy gồm các mẫu hoặc tên thuật ngữ có không gian tên đủ điều kiện để sử dụng "\*" làm ký tự đại diện. Theo mặc định, không bao gồm chú thích nào.</li>    <li> <code>IncludeMetadataAnnotations</code> : Danh sách được phân tách bằng dấu phẩy gồm các mẫu hoặc tên thuật ngữ có không gian tên đủ điều kiện để đưa vào yêu cầu tài liệu siêu dữ liệu, với "\*" là ký tự đại diện. Theo mặc định, sẽ bao gồm cùng các chú thích như IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Cho phép dịch vụ OData tránh ghi một số giá trị nhất định trong phản hồi. Nếu được dịch vụ xác nhận, chúng tôi sẽ phỏng đoán các giá trị đó theo những trường bị bỏ qua. Có các tùy chọn sau:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Cho phép dịch vụ OData bỏ qua giá trị null.</li>      </ul>    </li>    <li> <code>Implementation</code> : Chỉ định triển khai trình kết nối OData cần sử dụng. Giá trị hợp lệ là "2.0" hoặc null.</li>    </ul>


## Examples

### Example #1 
Kết nối với dịch vụ OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
