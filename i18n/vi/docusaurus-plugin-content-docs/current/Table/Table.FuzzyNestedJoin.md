---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Thực hiện phép nối mờ bảng trên các cột được cung cấp và cho ra kết quả nối trong một cột mới.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

Nối các hàng <code>table1</code> với các hàng <code>table2</code> dựa trên phép khớp mờ những giá trị của cột chính do <code>key1</code> chọn (cho <code>table1</code>) và <code>key2</code> chọn (cho <code>table2</code>). Kết quả sẽ được trả về trong một cột mới tên là <code>newColumnName</code>.<br />Khớp mờ là một phép so sánh dựa trên sự giống nhau của văn bản chứ không phải sự ngang bằng.<br /><code>joinKind</code> tùy chọn sẽ chỉ định loại phép nối cần thực hiện. Theo mặc định, sẽ thực hiện phép nối ngoài bên trái nếu chưa chỉ định <code>joinKind</code>. Các tùy chọn bao gồm:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Có thể đưa vào tập hợp <code>joinOptions</code> tùy chọn để chỉ định cách so sánh những cột chính. Các tùy chọn bao gồm:    <ul><li><code>ConcurrentRequests</code> : Một số trong khoảng từ 1 đến 8 cho bi&#234;́t số lu&#244;̀ng song song đ&#234;̉ sử dụng cho hoạt đ&#244;̣ng khớp mờ. Gi&#225; trị mặc định l&#224; 1.</li><li><code>Culture</code> : Cho ph&#233;p nh&#243;m bản ghi dựa tr&#234;n quy tắc cụ thể theo văn h&#243;a. Đ&#226;y c&#243; thể l&#224; bất kỳ t&#234;n văn h&#243;a hợp lệ nào. V&#237; dụ: một t&#249;y chọn Văn h&#243;a gồm c&#225;c bản ghi khớp &quot;ja-JP&quot; dựa tr&#234;n văn h&#243;a của người Nhật. Gi&#225; trị mặc định l&#224; &quot;&quot; có k&#234;́t quả khớp dựa tr&#234;n văn h&#243;a của người Anh b&#226;́t bi&#234;́n.</li><li><code>IgnoreCase</code> : Gi&#225; trị logic (true/false) cho ph&#233;p khớp khóa ph&#226;n biệt chữ hoa/thường. V&#237; dụ: khi là true, &quot;Grapes&quot; khớp với &quot;grapes&quot;. Gi&#225; trị mặc định l&#224; true.</li><li><code>IgnoreSpace</code> : Gi&#225; trị logic (true/false) cho ph&#233;p kết hợp c&#225;c phần văn bản để t&#236;m kết quả khớp. V&#237; dụ: khi là true, &quot;Gra pes&quot; khớp với &quot;Grapes&quot;. Gi&#225; trị mặc định l&#224; true.</li><li><code>NumberOfMatches</code> : Một số nguy&#234;n chỉ định số h&#224;ng khớp tối đa c&#243; thể được trả về cho m&#244;̃i hàng đ&#226;̀u vào. V&#237; dụ: Gi&#225; trị l&#224; 1 sẽ trả v&#234;̀ nhiều nhất một h&#224;ng khớp cho mỗi h&#224;ng đ&#226;̀u vào. Nếu kh&#244;ng cung cấp t&#249;y chọn này thì tất cả c&#225;c h&#224;ng khớp đ&#234;̀u được trả về.</li><li><code>SimilarityColumnName</code> : T&#234;n của cột hiển thị đ&#244;̣ tương tự giữa gi&#225; trị đầu v&#224;o v&#224; gi&#225; trị đại diện cho đầu v&#224;o đ&#243;. Gi&#225; trị mặc định l&#224; null, khi đ&#243; cột mới cho đ&#244;̣ tương tự sẽ kh&#244;ng được th&#234;m vào.</li><li><code>Threshold</code> : Một số trong khoảng từ 0,00 đến 1,00 cho bi&#234;́t điểm tương đ&#244;̀ng m&#224; tại đ&#243; hai gi&#225; trị sẽ khớp nhau.    V&#237; dụ: &quot;Grapes&quot; v&#224; &quot;Graes&quot; (thiếu &quot;p&quot;) được khớp với nhau chỉ khi t&#249;y chọn n&#224;y được đặt th&#224;nh dưới 0,90.    Ngưỡng 1,00 chỉ cho ph&#233;p khớp ch&#237;nh x&#225;c.    (Lưu &#253; rằng một &quot;kết quả khớp ch&#237;nh x&#225;c&quot; gần đ&#250;ng c&#243; thể bỏ qua c&#225;c kh&#225;c biệt như viết hoa, thứ tự từ v&#224; dấu chấm c&#226;u.)    Gi&#225; trị mặc định l&#224; 0,80.</li><li><code>TransformationTable</code> : Bảng cho phép khớp các bản ghi dựa tr&#234;n các ánh xạ giá trị tùy chỉnh. Bảng sẽ chứa các c&#244;̣t &quot;From&quot; và &quot;To&quot;. Ví dụ: &quot;Grapes&quot; được khớp với &quot;Raisins&quot; n&#234;́u bảng chuy&#234;̉n đ&#244;̉i được cung c&#226;́p có c&#244;̣t &quot;From&quot; chứa &quot;Grapes&quot; và c&#244;̣t &quot;To&quot; chứa &quot;Raisins&quot;. Lưu ý rằng vi&#234;̣c chuy&#234;̉n đ&#244;̉i sẽ được áp dụng cho mọi phi&#234;n bản văn bản trong bảng chuy&#234;̉n đ&#244;̉i. Với bảng chuy&#234;̉n đ&#244;̉i ở tr&#234;n, &quot;Grapes are sweet&quot; cũng được khớp với &quot;Raisins are sweet&quot;.</li></ul><br />


## Examples

### Example #1 
Phép nối mờ bên trong ở bên trái của hai bảng dựa trên [FirstName]
```powerquery
Table.FuzzyNestedJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  "NestedTable",
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
		    CustomerID = 1,
		    FirstName1 = "Bob",
		    Phone = "555-1234",
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
