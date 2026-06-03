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

Việc sử dụng `identityProvider` được chỉ định sẽ chuyển đổi `condition` thành danh sách danh tính mà `condition` sẽ trả về `true` trong tất cả các ngữ cảnh ủy quyền, trong đó `identityProvider` là nhà cung cấp danh tính. Sẽ xảy ra lỗi nếu không thể chuyển đổi `condition` thành danh sách danh tính, ví dụ: nếu `condition` tham khảo các thuộc tính không phải danh tính người dùng hoặc nhóm để đưa ra quyết định.

Lưu ý rằng danh sách danh tính thể hiện các danh tính giống hệt như trong `condition` và không được chuẩn hóa (chẳng hạn như mở rộng nhóm).



## Category
Accessing data
