---
title: List.Modes
---

# List.Modes


Trả về một danh sách chứa các giá trị xuất hiện thường xuyên nhất trong danh sách.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Trả về mục xuất hiện thường xuyên nhất trong danh sách, <code>list</code>. Nếu danh sách trống thì sẽ đưa ra ngoại lệ. Nếu xuất hiện nhiều mục có cùng tần suất tối đa, thì sẽ chọn mục cuối cùng.    Có thể chỉ định giá trị <code>comparisonCriteria</code> tùy chọn, <code>equationCriteria</code>, để kiểm soát quá trình kiểm tra đẳng thức. 


## Examples

### Example #1 
Tìm các mục xuất hiện thường xuyên nhất trong danh sách &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
