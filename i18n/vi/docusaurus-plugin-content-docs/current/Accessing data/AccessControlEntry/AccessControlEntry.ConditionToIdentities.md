---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Trả về danh sách danh tính mà điều kiện sẽ chấp nhận.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Việc sử dụng <code>identityProvider</code> được chỉ định sẽ chuyển đổi <code>condition</code> thành danh sách danh tính mà <code>condition</code> sẽ trả về <code>true</code> trong tất cả các ngữ cảnh ủy quyền, trong đó <code>identityProvider</code> là nhà cung cấp danh tính. Sẽ xảy ra lỗi nếu không thể chuyển đổi <code>condition</code> thành danh sách danh tính, ví dụ: nếu <code>condition</code> tham khảo các thuộc tính không phải danh tính người dùng hoặc nhóm để đưa ra quyết định.<br />    Lưu ý rằng danh sách danh tính thể hiện các danh tính giống hệt như trong <code>condition</code> và không được chuẩn hóa (chẳng hạn như mở rộng nhóm).<br />



## Category
Accessing data
